const grid_data = [
	{ id:1, title:"The Shawshank Redemption", year:1994, votes:678790, rating:9.2, rank:1},
	{ id:2, title:"The Godfather", year:1972, votes:511495, rating:9.2, rank:2},
	{ id:3, title:"The Godfather: Part II", year:1974, votes:319352, rating:9.0, rank:3},
	{ id:4, title:"The Good, the Bad and the Ugly", year:1966, votes:213030, rating:8.9, rank:4},
	{ id:5, title:"My Fair Lady", year:1964, votes:533848, rating:8.9, rank:5},
	{ id:6, title:"12 Angry Men", year:1957, votes:164558, rating:8.9, rank:6}
];

/*
webix.ui({
  id: "table",
   view:"datatable",
  columns:[
    { id:"rank",	header:"", css:"rank",  		width:50},
    { id:"title",	header:"Film title",width:200},
    { id:"year",	header:"Released" , width:80},
    { id:"votes",	header:"Votes", 	width:100}
  ],
  select:"row",
  autoheight:true,
  autowidth:true,
  multiselect:true,
  
  on:{
    onSelectChange:function(){
      var text = $$("table").getSelectedId(true).join();
      webix.message("Selected: "+text)
    }
  },
  data:grid_data
});		
*/


webix.ui({
  rows: [
    {
      id: 'panel-1',
      type: "clean",
      rows: [
        { template: "Pnael",
        },
        {
          view: "datatable",
          id: 'tbl-1',
          select: "row",
          multiselect: true,
          scrollX: true,
          columns:[
            { id:"rank",	header:"", css:"rank",  		width:50},
            { id:"title",	header:"Film title",width:200},
            { id:"year",	header:"Released" , width:80},
            { id:"votes",	header:"Votes", 	width:100}
          ],
          data:grid_data,
        },
      ],
    },
  ],
});
