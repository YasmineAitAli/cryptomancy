<script>
import axios from 'axios';

export default{
  data: () => ({ //error function
    currencies: [],
    errors: []
  }),
  created (){ //define the create method (when the components are loaded)
    axios.get('https://min-api.cryptocompare.com/data/top/totalvolfull?limit=11&tsym=USD')
      .then(response => {
        this.currencies = response.data.Data
        console.log(response)
        //console.log(this.currencies)
      })
      .catch(e => {
        this.errors.push(e)
      })
  } 

}
</script>

<template>
  <div class="table-wrapper">
  <h1>Toplist by 24H Volume Full Data</h1>
  <h4>Get a number of top coins by their total volume across all markets in the last 24 hours.</h4>
    <table class="fl-table">
    <thead>
    <tr>
      <th> Rank </th>
      <th> Icon</th>
      <th> Symbol </th>
      <th> FullName</th>
      <th> Price</th>
      <th> Volume</th>
      <th> Change percentage</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(value,key) in currencies">
      <td> {{ key }} </td>
      <td><img class="icon" v-bind:src="'https://cryptocompare.com'+ value.CoinInfo.ImageUrl" /></td>
      <td> {{ value.CoinInfo.Internal }}</td>
      <td> {{ value.CoinInfo.FullName }}</td>
      <td> {{ value.DISPLAY.USD.PRICE }}</td>
      <td> {{ value.DISPLAY.USD.VOLUME24HOURTO }}</td>
      <td> {{ value.DISPLAY.USD.CHANGEPCT24HOUR }}</td>
    </tr>
    </tbody>
    </table>
  </div>
</template>


<style>
.icon{
  height: 60px;
  width: 60px;
}

*{
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
}
body{
    font-family: Helvetica;
    -webkit-font-smoothing: antialiased;
    background: rgba( 71, 147, 227, 1);
}
h1{
    padding-top: 20px;
}
h4{
    text-align: center;
    font-size: 18px;
    letter-spacing: 0px;
}

/* Table Styles */

.table-wrapper{
    margin: 10px 70px 70px;
    box-shadow: 0px 35px 50px rgba( 0, 0, 0, 0.2 );
}

.fl-table {
    border-radius: 5px;
    font-size: 12px;
    font-weight: normal;
    border: none;
    border-collapse: collapse;
    width: 100%;
    max-width: 100%;
    white-space: nowrap;
    background-color: white;
}

.fl-table td, .fl-table th {
    text-align: center;
    padding: 8px;
}

.fl-table td {
    border-right: 1px solid #f8f8f8;
    font-size: 12px;
}

.fl-table thead th {
    color: #ffffff;
    background: #4fc37d;
}


.fl-table thead th:nth-child(odd) {
    color: #ffffff;
    background: #71e783ac;
}

.fl-table tr:nth-child(even) {
    background: #F8F8F8;
}

/* Responsive */

@media (max-width: 767px) {
    .fl-table {
        display: block;
        width: 100%;
    }
    .table-wrapper:before{
        content: "Scroll horizontally >";
        display: block;
        text-align: right;
        font-size: 11px;
        color: white;
        padding: 0 0 10px;
    }
    .fl-table thead, .fl-table tbody, .fl-table thead th {
        display: block;
    }
    .fl-table thead th:last-child{
        border-bottom: none;
    }
    .fl-table thead {
        float: left;
    }
    .fl-table tbody {
        width: auto;
        position: relative;
        overflow-x: auto;
    }
    .fl-table td, .fl-table th {
        padding: 20px .625em .625em .625em;
        height: 60px;
        vertical-align: middle;
        box-sizing: border-box;
        overflow-x: hidden;
        overflow-y: auto;
        width: 120px;
        font-size: 13px;
        text-overflow: ellipsis;
    }
    .fl-table thead th {
        text-align: left;
        border-bottom: 1px solid #f7f7f9;
    }
    .fl-table tbody tr {
        display: table-cell;
    }
    .fl-table tbody tr:nth-child(odd) {
        background: none;
    }
    .fl-table tr:nth-child(even) {
        background: transparent;
    }
    .fl-table tr td:nth-child(odd) {
        background: #F8F8F8;
        border-right: 1px solid #E6E4E4;
    }
    .fl-table tr td:nth-child(even) {
        border-right: 1px solid #E6E4E4;
    }
    .fl-table tbody td {
        display: block;
        text-align: center;
    }
}
</style>