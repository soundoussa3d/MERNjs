async function fetchData() {
    try {
      const response = await fetch('https://dummyjson.com/users');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      //console.log(data);
      console.log("data  successfully");
      return data;
      //console.log(users[0][1]);
    } catch (error) {
      console.error(error.message);
    }
    
    return data;
  }

  async function useData() {
    const data = await fetchData();
    if (data) {
      console.log(data.users[0]);
      //males
      var males = data.users.filter(user=>user.gender=="male");
      //other than males
      var others= data.users.filter(user=>user.gender!=="male");
      
      var other=others.map((user=>"Name :"+user.firstName +" "+user.lastName + " , Age : "+ user.age));

      /*for (let i = 0; i < other.length; i++) {
        console.log(other[i]);
      }*/

      //destructuring
    } else {
      console.error('Failed to fetch data');
    }
  }
  //useData();

  async function summarizeAge() {
    const data = await fetchData();
    if (data) {
      var males = data.users.filter(user=>user.gender=="male");
      
      var age = males.reduce((total,male)=>total+=male.age,0);
      console.log(age);
    } else {
      console.error('Failed to fetch data');
    }
  }
  async function displayresult() {
    const data = await fetchData();
    if (data) {
      console.log("users:");
       data.users.map(user=>console.log(user));
      console.log("the age of all the male users:");
      summarizeAge();

    } else {
      console.error('Failed to fetch data');
    }
  }
  displayresult();
  //summarizeAge();
  