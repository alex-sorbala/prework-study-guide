var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];

for (let index = 0; index < topics.length; index++) {
    console.log(topics[index]); 

    if (topics[index] === 'HTML') {
        console.log("Let's study HTML!");
      } else if (topics[index] === 'CSS') {
        console.log("Let's study CSS!");
      } else if (topics[index] === 'Git') {
        console.log("Let's study Git!");
      } else if (topics[index] === 'JavaScript') {
        console.log("Let's study JavaScript!");
      } else {
        console.log('Please try again!');
      }
}

