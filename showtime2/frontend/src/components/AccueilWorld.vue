<template>

<div>
  <div class="ticket ticket-1">
  
  <div class="date">
    <span class="day">31</span>
    <span class="month-and-time">OCT<br><span class="small">8PM</span></span>
  </div>

  <div class="artist">
    <span class="name">PETER TOSH</span>
    <br>
<span class="live small">LIVE</span>
  </div>

  <div class="location">
    <span>KINGSTON TOWN</span>
    <br>
   <span class="small"></span>
   <span>NANCY'S PUB</span>
  </div>

  <div class="rip">
  </div>
 
  <div class="cta">
    <button  type="submit" class="buy" href="/" v-on:click="submit()">GRAB A TICKET</button>
  </div>

</div>

<div class="ticket ticket-2">
  
  <div class="date">
    <span class="day">24</span>
    <span class="month-and-time">JAN<br><span class="small">8PM</span></span>
  </div>

  <div class="artist">
    <span class="name">SISTER NANCY</span>
    <br>
<span class="live small">LIVE</span>
  </div>

  <div class="location">
    <span>GOLDEN GROVE</span>
    <br>
    <span class="small"></span><span>SIZZLA'S DUB PLACE</span>
  </div>

  <div class="rip">
  </div>
  
  <div class="cta">
    <button  type = "submit" class="buy" href="#" v-on:click="submit()">GRAB A TICKET</button>
  </div>

</div>


<br>
<div class="ticket ticket-2">
  
  <div class="date">
    <span class="day">24</span>
    <span class="month-and-time">JAN<br><span class="small">8PM</span></span>
  </div>

  <div class="artist">
    <span class="name">SISTER NANCY</span>
    <br>
<span class="live small">LIVE</span>
  </div>

  <div class="location">
    <span>GOLDEN GROVE</span>
    <br>
    <span class="small"></span><span>SIZZLA'S DUB PLACE</span>
  </div>

  <div class="rip">
  </div>
  
  <div class="cta">
    <button type="submit" class="buy" href="#" v-on:click="submit()">GRAB A TICKET</button>
  </div>

</div>
<br>
</div>
</template>

<script>
  import axios from 'axios';
export default {
  name: 'AccueilWorld',
 
  data() {
    return {
      form: {
        userId:"",
        concertId:"",
        ticketId:""
        
      }
    }
  },
  methods: {
  
    submit(){
      //getTickets() a faire 
      //getConcerts() a faire

      //test en dur 
      const ticket_id= "6310fcde51e5708422f9d428";
       const concert_id="6310b7d3954644eddbe2f150";
      const user_id = JSON.parse(localStorage.getItem('data')).existingUser._id;
      axios.post('http://localhost:3000/tickets/buy', {userId:user_id,ticketId:ticket_id,concertId:concert_id})
                .then(function( response ){
                    // Handle success
                    console.log(response);
                }.bind(this));
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
body {
  background-color: #436ea5;
}

.ticket {
  font-family: sans-serif;

  background-repeat: no-repeat;
  background-position: top;
  background-size: 100%;
  background-color: #04030C;
  width: 700px;
  height: 350px;
  border-radius: 15px;
  -webkit-filter: drop-shadow(1px 1px 3px rgba(0, 0, 0, 0.3));
            filter: drop-shadow(1px 1px 3px rgba(0, 0, 0, 0.3)); 
  display: block;
  margin: 10% auto auto auto;
  color: #fff;;
}

.date {
  margin: 15px;
  -webkit-filter: drop-shadow(1px 1px 3px rgba(0, 0, 0, 0.3));
            filter: drop-shadow(1px 1px 3px rgba(0, 0, 0, 0.3)); 
}

.date .day{
  font-size: 80px;
  float: left;
}

.date .month-and-time {
  float: left;
  margin: 15px 0 0 0;
  font-weight: bold;
}

.artist {
  font-size: 30px;
  margin: 10px 100px 0 40px;
  float: left;
  font-weight: bold;
  -webkit-filter: drop-shadow(1px 1px 3px rgba(0, 0, 0, 0.3));
            filter: drop-shadow(1px 1px 3px rgba(0, 0, 0, 0.3)); 
}

.location {
  float: left;
  margin: 135px 0 0 78px;
  font-size: 30px;
  font-weight: bold;
  -webkit-filter: drop-shadow(1px 1px 3px rgba(0, 0, 0, 0.3));
            filter: drop-shadow(1px 1px 3px rgba(0, 0, 0, 0.3)); 
}

.location::before {
  background-image: url('https://upload.wikimedia.org/wikipedia/commons/c/cb/QRCodeWikipedia.png');
  background-size: 110px 110px;
  width: 110px; 
  height: 110px;
  content:"";
  display: inline-block;
  float: left;
  position: absolute;
  left: -160px;
  bottom: 5px;
  -webkit-filter: drop-shadow(1px 1px 3px rgba(0, 0, 0, 0.3));
            filter: drop-shadow(1px 1px 3px rgba(0, 0, 0, 0.3)); 
}

.rip {
  border-right: 8px dotted #436ea5;
  height: 300px;
  position: absolute;
  top: 0;
  left: 530px;
}

.cta .buy {
  position: absolute;
  top: 135px;
  right: 15px;
  display: block;
  font-size: 12px;
  font-weight: bold;
  background-color: #436ea5;
  padding: 10px 20px;
  border-radius: 25px;
  color: #fff;
  text-decoration: none;
  -webkit-transform: rotate(-90deg);
        -ms-transform: rotate(-90deg);
            transform: rotate(-90deg);
  -webkit-filter: drop-shadow(1px 1px 3px rgba(0, 0, 0, 0.3));
            filter: drop-shadow(1px 1px 3px rgba(0, 0, 0, 0.3)); 
}

.small {
  font-weight: 200;
}

.ticket-1 {
    background-image: url(https://images.unsplash.com/photo-1483101974978-cf266fdf1139?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3289&q=80);
}

.ticket-2{
    background-image: url(https://images.unsplash.com/photo-1550184658-ff6132a71714?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2180&q=80);
}
</style>
