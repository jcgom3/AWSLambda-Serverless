"use strict";

module.exports.generateRandomNumber = async (event) => {
  const randomNumber = parseInt(Math.random * 100);
  console.log("this is the generated random number:", randomNumber);
  return randomNumber;

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
