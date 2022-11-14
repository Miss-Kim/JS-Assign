# JS-Assignment 14/Nov

# The Komputer Store

Scope is to "build a dynamic webpage using “vanilla” JavaScript." 
Requirements for the Komputer Store -, The Bank Section, Work Section, laptop Section has 2 parts. (laptop selection area and info section).

## Acknowledgements

 - [Awesome Readme Templates](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)
 - [Awesome README](https://github.com/matiassingers/awesome-readme)
 - [How to write a Good readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)


## API Reference

#### Get all items

https://noroff-komputer-store-api.herokuapp.com/computers
  ``GET /api/items``


| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |




## Appendix A

Requirement for The Komputer Store
1. The Bank (Figure 1)
1.1 Balance
The bank shows a “Bank” balance in your currency. This is the amount available for you to buy a laptop.

1.2 Outstanding Loan (Only visible after taking a loan)
Shows the outstanding Loan value. This should be reduced as loan paid back.
1.3 Get a loan
The Get a loan button will attempt to get a loan from the bank. When the Get a loan button is clicked, it
must show a “Prompt” popup box that allows you to enter an amount.

OBS: Constraints on Get a loan button:
1. You cannot get a loan more than double of your bank balance (i.e., If you have 500 you cannot get a
loan greater than 1000.)
2. You cannot get more than one bank loan before repaying the last loan
3. You may not have two loans at once. The initial loan should be paid back in full.

------------------------------------------------------------
2. Work 
(2.1) Pay
The pay or your current salary amount in your currency. Should show how much money you have earned by
“working”. This money is NOT part of your bank balance.

(2.2) Bank Button
The bank button must transfer the money from your Pay/Salary balance to your Bank balance. Remember
to reset your pay/salary once you transfer.
Constraints on Bank button:
1. If you have an outstanding loan, 10% of your salary MUST first be deducted and transferred to the
outstanding Loan amount

2. The balance after the 10% deduction may be transferred to your bank account

(2.3) Work button
The work button must increase your Pay balance at a rate of 100 on each click.

(2.4) Repay Loan button
Once you have a loan, a new button labeled “Repay Loan” should appear. Upon clicking this button, the full
value of your current Pay amount should go towards the outstanding loan and NOT your bank account.
Any remaining funds after paying the loan may be transferred to your bank account.

------------------------------------------------------------

3) Buy Now Button
The buy now button is the final action of your website. This button will attempt to “Buy” a laptop and
validate whether the bank balance is sufficient to purchase the selected laptop.
If you do not have enough money in the “Bank”, a message must be shown that you cannot afford the
laptop.
When you have sufficient “Money” in the account, the amount must be deducted from the bank and you
must receive a message that you are now the owner of the new laptop!


###Appendix B 
https://photos.app.goo.gl/df7Q6NrZkNKn3DBy8

## Authors

- Github: [@Miss-Kim](https://www.github.com/Miss-Kim)


🙋🏻‍♀️ ✨ Kim Ivanova ✨
## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.

