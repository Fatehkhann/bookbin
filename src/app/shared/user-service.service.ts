import { Injectable } from '@angular/core';
import { User } from './user.model';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class UserService {

  constructor(private firebaseDB: AngularFireDatabase) { }

  addUser(user: User) {
    return this.firebaseDB.list('/users').push({
      username: user.username,
      email: user.email,
      password: user.password,
      name: user.name
    });
  }

  getUser(userCreds) {
    return this.firebaseDB.database.ref('users').orderByChild('email').equalTo(userCreds.username).once('value', (snapshot) => {
      return snapshot.val();
    })
  }

}
