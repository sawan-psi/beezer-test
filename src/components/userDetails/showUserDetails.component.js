import React from 'react';


function userList(users, accounts) {
    return Object.keys(users).map((user, index) => {
      return (
        <tr key={index}>
          <td>{users[user].name}</td>
          <td>{users[user].account}</td>
          <td>
            {accountDetails(users[user].account, accounts)}
          </td>
        </tr>
      );
    });
  }

  function accountDetails(accountNumber, accounts) {
    const length = Object.keys(accounts[accountNumber]['apps']).length;
    return Object.keys(accounts[accountNumber]['apps']).map((account, index) => {
      return(
        <span key={index}>{accounts[accountNumber]['apps'][account].title}{ index+1 !== length ? ', ' : '' }</span>
      );
    })
  }

export const ShowUserDetails = (props) => {
    const { users, accounts } = props;
    return (
        <table border="1" cellPadding="0" cellSpacing="0">
            <thead>
                <tr>
                <th>
                    Name
                </th>
                <th>
                    Account
                </th>
                <th>
                    Titles
                </th>
                </tr>
            </thead>
            <tbody>
                {userList(users, accounts)}
            </tbody>
        </table>
    )
}