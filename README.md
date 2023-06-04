# book-record-management
this is an application called book record management
#endpoints
# /users
POST:Create a new user
GET:Get all list users

# /users/{id}
get:get a user by their id
put:update a user by id
delete:delete a user by their id(check if the user still has
an issued book and is there any fine to be collected from the user)

# /users/subscription-details/{id}
get:get user subscription details
1.date of subscription
2.valid till??
3.fine if any ??

 # /books
 get:get all books
 post:add a new book

 # /books/{id}
 get:get a book by id
 put:update a book by id

 # /books/issued
 get:get all issued books with fine

 # /books/issued/withfine
 get:get all issued books with fine

 # subscription types
 basic(3 months)
 standard(6 months)
 premium(12 months)

 if a user has an issued book and the issued book it to be returned at 15 may 2022
if user missed a date to return ,then user gets a fine Rs.50/-

if a user has an issued book and the issued book it to be returned at 15 may 2022
if user missed a date to return ,then the subscription also got expired,then users need to pay of 150/-(100+50)
<! -- 
MVC architecture
>>model view controller
>>model and controller are wrt backend
>>view wrt to frontend
>>controller:brain or logic of our route
>>models:it speaks about the structure of mongo db collections=like a table





 -->



