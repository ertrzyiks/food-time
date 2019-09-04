import {ApolloLink, Observable} from 'apollo-link'

export class AuthLink extends ApolloLink {
  constructor(user,token) {
    super()
    this.token = token
    this.user = user
  }

  setTokenHeader(operation) {
    operation.setContext({ headers: { authorization: `Bearer ${this.token}` } })
  }

  refreshToken() {
    return new Promise(resolve => {
      this.user.reloadAuthResponse()
        .then(res => {
          this.token = res.id_token
          resolve(true)
        })
    })
  }

  request(operation, forward) {
    this.setTokenHeader(operation)

    return new Observable(observer => {
      let subscription, innerSubscription;
      try {
        subscription = forward(operation).subscribe({
          next: observer.next.bind(observer),
          complete: observer.complete.bind(observer),
          error: networkError => {
            if (networkError.statusCode === 400) {
              this.refreshToken().then(success => {
                if (success) {
                  this.setTokenHeader(operation)
                  innerSubscription = forward(operation).subscribe(observer)
                } else {
                  observer.error(new Error('refreshing token failed'))
                }
              });
            } else {
              observer.error(networkError)
            }
          },
        });
      } catch (e) {
        observer.error(e)
      }

      return () => {
        if (subscription) subscription.unsubscribe()
        if (innerSubscription) innerSubscription.unsubscribe()
      }
    })
  }
}
