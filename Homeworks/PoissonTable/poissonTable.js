function createTable(n,m)
    {
      let cell = "<th>Num. of Ev.</th>"; // table column headers
      let text = ""; //for all rows
      for (let i = 0.5; i <= n; i+=0.5) {
        cell+= "<th>"+"λ = "+i+"</th>";
      }
      text = "<tr>"+cell+"</tr>"; // all the column headers added to first row
      for (let j = 0; j<=m;j++)
      {
        cell = "<th>"+"x = "+j+"</th>";   //adding one haeder cell for data rows.
        for(let k = 0.5; k<=n;k+=0.5)
        {
      // k is for the columns so -->lambda , j is fir rows so -->x
          let calculatePoisson = calcPoisson(k,j); 
          cell+= "<td>"+calculatePoisson.toFixed(4)+"</td>";
        }
        text += "<tr>"+cell+"</tr>";
      }
      poissonTable.innerHTML = text;
    }

    function calcPoisson(lambda,x=0) 
    {
      /* this recursive function calculates 
      the poisson value in any x value in a column*/
      if(x==0)
      {
        return Math.exp(-lambda);
      }
      return (lambda /x)*calcPoisson(lambda,x-1);
    }