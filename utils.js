module.exports =  
{

// Write a function matrixProduct(mat1, mat2) that returns 
// a new matrix that is the product of mat1 and mat2 matrices. 

 matrixProduct: function (mat1, mat2) {
    let result = [];
    for (let i = 0; i < mat1.length; i++) {
        result[i] = [];
        for (let j = 0; j < mat2[0].length; j++) {
            let sum = 0;
            for (let k = 0; k < mat1[0].length; k++) {
                sum += mat1[i][k] * mat2[k][j];
            }
            result[i][j] = sum;
        }
    }
    return result;
},


// Write a function sumOfMatrices(mat1, mat2) that accepts 
// two matrices and returns the sum of those matrices in a new matrix.

sumOfMatrices: function (mat1,mat2){
    for(let i = 0; i < mat1.length; ++i) {
        for (let j = 0; j < mat2.length; ++j) {
           mat1[i][j] += mat2[i][j];
        }
    }
    return mat1;
},


// Write a function sumOfEachRow(mat) that accepts a matrix and returns
// an array that contains sum of every row of the matrix for its elements.


sumOfEachRow: function (mat) {
    let arr = [];
    for (let i = 0; i < mat[0].length; i++)
    {
        arr.push(this.sumOfArray(mat[i]));
    }
    return arr;
  },

  sumOfArray: function(arr)
  {
    let sum = 0;
    for(let k = 0; k < arr.length; k++)
    {
        sum+= arr[k];
    }
    return sum;
  }
};

