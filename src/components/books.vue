<template>
  <div class="instructions">
    <h2>
      I listen to a lot of books!
      <br />Below is a list of all books I have recorded on
      <a
        href="https://www.goodreads.com/user/show/30980905-david-farley"
        target="_blank"
      >Goodreads</a>, that I have listened to in the past 5 years.
      <br />See the stuff I have been reading!
    </h2>

    <h2 class="Books-title">Try searching for your favorite book or author!</h2>
    <h4>
      Click column headers to sort the table by column.
      <br />Click column header options for filter options.
      <br />Click and drag dividers to re-size columns.
      <br />Table courtesy of ag-grid for angular.
    </h4>
    <ag-grid-vue
      style=" height: 500px;"
      class="ag-theme-balham"
      :columnDefs="columnDefs"
      :rowData="rowData"
    ></ag-grid-vue>
  </div>
</template>

<script>
import { AgGridVue } from "ag-grid-vue";
import data from "../assets/goodreads.js";
export default {
  name: "books",
  data() {
    return {
      columnDefs: null,
      rowData: null
    };
  },
  components: {
    AgGridVue
  },
  beforeMount() {
    this.columnDefs = [
      {
        headerName: "Title",
        field: "Title",
        sortable: true,
        filter: true,
        width: 450
      },
      {
        headerName: "Author",
        field: "Author",
        sortable: true,
        filter: true,
        width: 250
      },
      {
        headerName: "Finished",
        field: "Finished",
        sortable: true,
        filter: true,
        width: 100
      },
      {
        headerName: "Date Recorded",
        field: "DateRecorded",
        sortable: true,
        filter: true,
        width: 100
      },
      {
        headerName: "My Rating",
        field: "MyRating",
        sortable: true,
        filter: true,
        width: 100
      },
      {
        headerName: "Average Rating",
        field: "AverageRating",
        sortable: true,
        filter: true,
        width: 100
      },
      {
        headerName: "Number Of Pages",
        field: "NumberOfPages",
        sortable: true,
        filter: true,
        width: 100
      },
      {
        headerName: "Publisher",
        field: "Publisher",
        sortable: true,
        filter: true
      },
      {
        headerName: "Year Published",
        field: "YearPublished",
        sortable: true,
        filter: true,
        width: 100
      }
    ];

    this.rowData = data;
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
