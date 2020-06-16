var vm = new Vue({
  el: "#app",
  data: {
    delMode: false,
    events: [
      //mutek
      {
        //tital
        eventtital: "MUTEK JP",
        subtital: "EDITION4",
        //cover image
        imgurl: "https://i.ytimg.com/vi/FZMXidFmtpw/maxresdefault.jpg",
        //person
        person: "_fun.dream00",
        //time
        date: "2019-12-15",
        time_start: "19:00",
        time_to: " - ",
        time_end: "23:00",
        //ticket type & price
        type: "1 Days Ticket",
        price: "800",
        //location
        site: "LINE CUBE SHIBUYA",
        adress: "東京都渋谷区宇田川町1−1",
        mapurl: "https://goo.gl/maps/JnXDN6azu7jPaV9x6",
        //tatus
        status_un: "UNUSED",
        status_ued: "USED",
        color_st: "#30527c",
        status: false,
        //check
        openE: false,
        openT: true,
        show_ed: false,
      },
      {
        //tital
        eventtital: "SETOUCHI 2019",
        subtital: "TRIENNALE",
        //cover image
        imgurl: "https://miro.medium.com/max/5660/1*HoQhlB6qu_9nAx5vEhQaNw.png",
        //person
        person: "fun_dream.11",
        //time
        date: "2019-03-20",
        time_start: "10:00",
        time_to: " - ",
        time_end: "19:30",
        //ticket type & price
        type: "3 Season Ticket",
        price: "1300",
        //location
        site: "Islands in Seto Inland Sea",
        adress: "日本 岡山市と香川縣",
        mapurl: "https://goo.gl/maps/ip52TcJXehvPeUg37",
        //tatus
        status_un: "UNUSED",
        status_ued: "USED",
        color_st: "#5E3D50",
        status: true,
        //check
        openE: false,
        openT: false,
        show_ed: false,
      },
      {
        //tital
        eventtital: "EVENT'S TITAL",
        subtital: "SUBTITAL",
        //cover image
        imgurl: "",
        //person
        person: "Owner's ID",
        //time
        date: "",
        time_start: "00:00",
        time_to: " - ",
        time_end: "01:00",
        //ticket type & price
        type: "Type of the ticket",
        price: "0",
        //location
        site: "Name of the event's place",
        adress: "Adress of the event's place",
        mapurl: "",
        //tatus
        status_un: "UNUSED",
        status_ued: "USED",
        color_st: "#30527c",
        status: false,
        //check
        openE: false,
        openT: false,
        show_ed: false,
      }
      
    ],
    editors: [
      {
        name: "Picture URL",
        longer: true,
        type: "url",
        holder: "A URL of cover image.",
        model: 'imgurl',
      },
      {
        name: "Event's Tital",
        longer: false,
        type: "text",
        holder: "Tital of the event.",
        model: 'eventtital',
      },
      {
        name: "Subtital",
        longer: false,
        type: "text",
        holder: "The event's subtital.",
        model: "subtital",
      },
      {
        name: "Person ID",
        longer: false,
        type: "text",
        holder: "Ticket's owner.",
        model: "person",
      },
      {
        name: "Event's Date",
        longer: false,
        type: "date",
        holder: "",
        model: "date",
      },
      {
        name: "Start Time",
        longer: false,
        type: "time",
        holder: "",
        model: "time_start",
      },
      {
        name: "Endding Time",
        longer: false,
        type: "time",
        holder: "",
        model: "time_end",
      },
      {
        name: "Ticket Type",
        longer: false,
        type: "text",
        holder: "",
        model: "type",
      },
      {
        name: "Ticket Price",
        longer: false,
        type: "text",
        holder: "",
        model: "price",
      },
      {
        name: "Location",
        longer: true,
        type: "text",
        holder: "Name of the event's place.",
        model: "site",
      },
      {
        name: "Adress",
        longer: true,
        type: "text",
        holder: "Adress of the event's place.",
        model: "adress",
      },
      {
        name: "Map URL",
        longer: true,
        type: "url",
        holder: "Location on google map.",
        model: "mapurl",
      },
      {
        name: "Status Color",
        longer: false,
        type: "color",
        holder: "",
        model: "color_st",
        
      },
      {
        name: "Status",
        longer: false,
        type: "checkbox",
        holder: "",
        model: "status",
      },
    ],
  },
  methods: {
    seting_close: function(id){
      this.events[id].openE = false
    },
    
    showEd: function(id){
      this.events[id].show_ed = true
    },
    hideEd: function(id){
      this.events[id].show_ed = false
    },
    
    addticket: function(){
      this.events.push(
        {
        //tital
        eventtital: "EVENT'S TITAL",
        subtital: "SUBTITAL",
        //cover image
        imgurl: "",
        //person
        person: "Owner's ID",
        //time
        date: "",
        time_start: "00:00",
        time_to: " - ",
        time_end: "01:00",
        //ticket type & price
        type: "Type of the ticket",
        price: "0",
        //location
        site: "Name of the event's place",
        adress: "Adress of the event's place",
        mapurl: "",
        //tatus
        status_un: "UNUSED",
        status_ued: "USED",
        color_st: "#30527c",
        status: false,
        //check
        openE: false,
        openT: false,
        show_ed: false,
      }
      )
    },
    delticket: function(id){
      this.events.splice(id,1)
    },
  },
})