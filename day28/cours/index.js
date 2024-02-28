//?Filtering
Model.find({ field: 'value' });

//?logical operators
Model.find({
    $or: [{ field1: 'value1' }, { field2: 'value2' }],
    $and: [{ field3: 'value3' }, { field4: 'value4' }]
  });
  
//?comparison operators
Model.find({
    field: { $gt: 10, $lt: 20 }
});

//?Inclusion/exclusion
Model.find({
    field: { $in: ['value1', 'value2'] }
  });

//?Date Range
Model.find({
    dateField: { $gte: new Date('2022-01-01'), $lte: new Date('2022-12-31') }
  });

//?Combining conditions
Model.find({
    $and: [
      { field1: 'value1' },
      { $or: [{ field2: 'value2' }, { field3: 'value3' }] }
    ]
  });


//?Sorting
User.find()
  .sort({ age: 1 })
  .then((users) => {
    console.log(users);
});

//? Pagination
//*skip() : to ignore a certain amount of documents 
User.find()
  .skip(2)
  .then((users) => {
    console.log(users);
});


//*limit(): To specify the number of document we want to retrieve
User.find()
  .limit(5)
  .then((users) => {
    console.log(users);
});

//*we can combine them : 
//*pageSize : is the number of dicuments returned 
//*pageNumber : is the index of pagination we are performing

const pageSize = 10;
const pageNumber = 3;

User.find()
  .skip((pageNumber - 1) * pageSize)
  .limit(pageSize)
  .then((users) => {
    console.log(users);
});


//?aggregation
//*$group : groups the users by their age 
//*$sum :accumulator counts the number of users in each age group 
User.aggregate([
    {
      $group: {
        _id: "$age",
        count: { $sum: 1 },
      },
    },
  ]).then((users) => {
    console.log(users);
});


//*$avg :accumulator calculates the average age of all users  
User.aggregate([
    {
      $group: {
        _id: "",
        averageAge: { $avg: "$age" }
      }
    }
  ]).then((user) => {
    console.log(user);
  });

 //! Adding validation rules (Schema validation)

 const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 30,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/,
    },
    age: {
        type: Number,
        min: [18, 'Must be at least 18 years old'],
    },
});