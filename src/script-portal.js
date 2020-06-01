var firebaseConfig = {
    apiKey: "AIzaSyBv8smcSq6KUFImtYKIAWWZ0PgE3FDqS3s",
    authDomain: "dev-roomlelo.firebaseapp.com",
    databaseURL: "https://dev-roomlelo.firebaseio.com",
    projectId: "dev-roomlelo",
    storageBucket: "dev-roomlelo.appspot.com",
    messagingSenderId: "450187201766",
    appId: "1:450187201766:web:808edcd60afea26be93f27"
  };

firebase.initializeApp(firebaseConfig)
var db = firebase.firestore()

window.onload = function(){

			// document.getElementById('owner-btn').style.backgroundColor = 'white';
			// document.getElementById('owner-btn').style.color = 'black';
			// document.getElementById('user-div').style.display = 'none';
			// document.getElementById('agent-div').style.display = 'none';

			// gsap.from("#o-name",0.4,{opacity:0,ease:Power2.easeInOut,x:-400})
			// gsap.from("#o-phone",0.8,{opacity:0,ease:Power2.easeInOut,x:-400})
			// gsap.from("#o-email",1.2,{opacity:0,ease:Power2.easeInOut,x:-400})
			// gsap.from("#o-address",1.6,{opacity:0,ease:Power2.easeInOut,x:-400})

			// document.getElementById('show-notice-btn').addEventListener('click', function(){
			// 	document.getElementById('notice-div').style.display = 'block';
			// 	document.getElementById('complaint-div').style.display = 'none';
			// 	document.getElementById('show-notice-btn').style.backgroundColor = 'white';
			// 	document.getElementById('show-notice-btn').style.color = 'black';
			// 	document.getElementById('show-complaint-btn').style.backgroundColor = 'rgba(0,0,0,0.1)';
			// 	document.getElementById('show-complaint-btn').style.color = 'white';
			// })
			// document.getElementById('show-complaint-btn').addEventListener('click', function(){
			// 	document.getElementById('complaint-div').style.display = 'block';
			// 	document.getElementById('notice-div').style.display = 'none';
			// 	document.getElementById('show-complaint-btn').style.backgroundColor = 'white';
			// 	document.getElementById('show-complaint-btn').style.color = 'black';
			// 	document.getElementById('show-notice-btn').style.backgroundColor = 'rgba(0,0,0,0.1)';
			// 	document.getElementById('show-notice-btn').style.color = 'white';
			// })
		}

		// animation to show owner portal
		function showOwner(){
			document.getElementById('owner-div').style.display = 'block';
			document.getElementById('owner-btn').style.backgroundColor = 'white';
			document.getElementById('owner-btn').style.color = 'black';
			document.getElementById('user-div').style.display = 'none';
			document.getElementById('agent-div').style.display = 'none';

			gsap.from("#o-name",0.4,{opacity:0,ease:Power2.easeInOut,x:-400})
			gsap.from("#o-phone",0.8,{opacity:0,ease:Power2.easeInOut,x:-400})
			gsap.from("#o-email",1.2,{opacity:0,ease:Power2.easeInOut,x:-400})
			gsap.from("#o-address",1.6,{opacity:0,ease:Power2.easeInOut,x:-400})

			document.getElementById('user-btn').style.backgroundColor = 'rgba(0,0,0,0.1)';
			document.getElementById('user-btn').style.color = 'white';
			document.getElementById('agent-btn').style.backgroundColor = 'rgba(0,0,0,0.1)';
			document.getElementById('agent-btn').style.color = 'white';
		}

			// animation to show user portal
			function showUser(){
			document.getElementById('user-div').style.display = 'block';
			document.getElementById('user-btn').style.backgroundColor = 'white';
			document.getElementById('user-btn').style.color = 'black';
			document.getElementById('owner-div').style.display = 'none';
			document.getElementById('agent-div').style.display = 'none';
			
			gsap.from("#u-name",0.4,{opacity:0,ease:Power2.easeInOut,x:-400})
			gsap.from("#u-phone",0.8,{opacity:0,ease:Power2.easeInOut,x:-400})
			gsap.from("#u-email",1.2,{opacity:0,ease:Power2.easeInOut,x:-400})
			
			document.getElementById('agent-btn').style.backgroundColor = 'rgba(0,0,0,0.1)';
			document.getElementById('agent-btn').style.color = 'white';
			document.getElementById('owner-btn').style.backgroundColor = 'rgba(0,0,0,0.1)';
			document.getElementById('owner-btn').style.color = 'white';
		}

			// animation to show agent portal
			function showAgent(){
			document.getElementById('agent-div').style.display = 'block';
			document.getElementById('agent-btn').style.backgroundColor = 'white';
			document.getElementById('agent-btn').style.color = 'black';
			document.getElementById('owner-div').style.display = 'none';
			document.getElementById('user-div').style.display = 'none';
			
			gsap.from("#a-name",0.4,{opacity:0,ease:Power2.easeInOut,x:-400})
			gsap.from("#a-phone",0.8,{opacity:0,ease:Power2.easeInOut,x:-400})
			gsap.from("#a-email",1.2,{opacity:0,ease:Power2.easeInOut,x:-400})
			gsap.from("#a-address",1.6,{opacity:0,ease:Power2.easeInOut,x:-400})

			document.getElementById('user-btn').style.backgroundColor = 'rgba(0,0,0,0.1)';
			document.getElementById('user-btn').style.color = 'white';
			document.getElementById('owner-btn').style.backgroundColor = 'rgba(0,0,0,0.1)';
			document.getElementById('owner-btn').style.color = 'white';
		}


		// log in  of owner : owner portal
		function submitOwner(){
			let name = document.getElementById('o-name').value.toLowerCase();
			let phone = document.getElementById('o-phone').value.toString();
			let email = document.getElementById('o-email').value;
			let address = document.getElementById('o-address').value;

			if(name!="" && phone!="" && email!="" && address!="")
			{
				document.getElementById('conformation').style.display = 'block';
				document.getElementById('owner-div').style.display = 'none';
				document.getElementById('show-o').style.display = 'none';
				document.getElementById('show-u').style.display = 'none';
				document.getElementById('show-a').style.display = 'none';

				//load the previous notices
				 db.collection('ownerProfile').doc(name+phone).get().then(res =>{
				 	if(email===res.data().email)
				 	{
				 		document.getElementById('show-notice-btn').click();

				 			db.collection('propertyNoticeToOwner').doc(name+phone).get().then(res =>{
				 		 	var arr = res.data().notice;
				 		 	arr.forEach( function(element, index) {
				 		 		
				 		 		var newEle = `
				 		 			Date : ${element.date} 
				 		 			<br>
				 		 			Notice : ${element.notice}
				 		 			<hr style="border:1px solid #ddd;">
				 		 			<br>
				 		 		`
				 		 		document.getElementById('notice-div').innerHTML= newEle + document.getElementById('notice-div').innerHTML;
				 		 	})
				 		 })

				 		document.getElementById('conformation').style.display = 'none';
				 		document.getElementById('show-n').style.display = 'initial';
				 		document.getElementById('show-c').style.display = 'initial';

				 		//load all complaints
				 		document.getElementById('complaint-div').innerHTML=`
				 			
				 			<textarea id="complaint-box" style="margin:50px auto; background-color: rgba(0,0,0,0.2); color:white;font-family:Bahnschrift;width: 95%; height:200px; " placeholder="File a new Complaint here"></textarea>
							<input id="property-complaint" required  name="" placeholder="Property ID/Name">
							<button  style="margin-top: 30px; float: right;" onclick="fileComplaint('owner')">Submit</button>

				 		`

				 		 db.collection('ownerComplaint').doc(name+phone).get().then(res =>{
				 		 	console.log(res.data().complaint)
				 		 	var arr = res.data().complaint;
				 		 	arr.forEach( function(element, index) {
				 		 		
				 		 		var newEle = `
				 		 			Date : ${element.date} 
				 		 			<br>
				 		 			Complaint : ${element.complaint}
				 		 			<hr style="border:1px solid #ddd;">
				 		 			<br>
				 		 		`
				 		 		document.getElementById('complaint-div').innerHTML= newEle + document.getElementById('complaint-div').innerHTML;
				 		 	})
				 		 })
			
				 	}
				 }).catch(err =>{
				 	alert('Invalid Details')
				 })

			}
		}


		// log in  of user : user portal
		function submitUser(){
			let name = document.getElementById('u-name').value;
			let phone = document.getElementById('u-phone').value;
			let email = document.getElementById('u-email').value;

			if(name!="" && phone!="" && email!=""){

				document.getElementById('conformation').style.display = 'block';
				document.getElementById('user-div').style.display = 'none';
				document.getElementById('show-o').style.display = 'none';
				document.getElementById('show-u').style.display = 'none';
				document.getElementById('show-a').style.display = 'none';

				 db.collection('userProfile').doc(name+phone).get().then(res =>{
				 	if(email===res.data().email)
				 	{
				 		document.getElementById('show-notice-btn').click();

				 		//load previous notices
				 		db.collection('propertyNoticeToUser').doc(name+phone).get().then(res =>{
				 		 	var arr = res.data().notice;
				 		 	arr.forEach( function(element, index) {
				 		 		
				 		 		var newEle = `
				 		 			Date : ${element.date} 
				 		 			<br>
				 		 			Notice : ${element.notice}
				 		 			<hr style="border:1px solid #ddd;">
				 		 			<br>
				 		 		`
				 		 		document.getElementById('notice-div').innerHTML= newEle + document.getElementById('notice-div').innerHTML;
				 		 	})
				 		 })


				 		document.getElementById('conformation').style.display = 'none';
				 		document.getElementById('show-n').style.display = 'initial';
				 		document.getElementById('show-c').style.display = 'initial';


				 		//load all complaints
				 		document.getElementById('complaint-div').innerHTML=`

				 			<textarea id="complaint-box" style="margin:50px auto; background-color: rgba(0,0,0,0.2); color:white;font-family:Bahnschrift;width: 95%; height:200px; " placeholder="File a new Complaint here"></textarea>
							<input id="property-complaint" required  name="" placeholder="Property ID/Name">
							<button  style="margin-top: 30px; float: right;" onclick="fileComplaint('user')">Submit</button>

				 		`
				 		 db.collection('userComplaint').doc(name+phone).get().then(res =>{
				 		 	console.log(res.data().complaint)
				 		 	var arr = res.data().complaint;
				 		 	arr.forEach( function(element, index) {
				 		 		
				 		 		var newEle = `
				 		 			Date : ${element.date} 
				 		 			<br>
				 		 			Complaint : ${element.complaint}
				 		 			<hr style="border:1px solid #ddd;">
				 		 			<br>
				 		 		`
				 		 		document.getElementById('complaint-div').innerHTML= newEle + document.getElementById('complaint-div').innerHTML;
				 		 	})
				 		 })
				 		
				 	}
				 }).catch(err =>{
				 	alert('Invalid Details')
				 })
			
			 }
		}


		// log in  by company member portal or agent portal
		function submitAgent(){
			let name = document.getElementById('a-name').value;
			let phone = document.getElementById('a-phone').value;
			let email = document.getElementById('a-email').value;
			let address = document.getElementById('a-address').value;

			if(name!="" && phone!="" && email!="" && address!=""){
				document.getElementById('conformation').style.display = 'block';
				document.getElementById('agent-div').style.display = 'none';
				document.getElementById('show-o').style.display = 'none';
				document.getElementById('show-u').style.display = 'none';
				document.getElementById('show-a').style.display = 'none';

				  db.collection('agentProfile').doc(name+phone).get().then(res =>{
				 	if(email===res.data().email)
				 	{
				 		document.getElementById('conformation').style.display = 'none';
				 		document.getElementById('all-detalis').style.display = 'block';
				 	}
				 }).then(res =>{
				 	document.getElementById('user-notice-details').click();
				 	document.getElementById('head-agent').textContent="Notice to Users";
				 	document.getElementById('head-agent').style.display = 'block';
				 })
				  .catch(err =>{
				 	alert("Invalid Input")
				 })
			 }

		}



	// to view notice of user by company member portal
	async function userNotice(){

		document.getElementById('all-detalis').innerHTML =`

				<input type="text" id="notice-fire" placeholder="User Id : usernamephone">
		<textarea id="new-notice" style="margin:50px auto; background-color: rgba(0,0,0,0.2); color:white;font-family:Bahnschrift;width: 100%; height:200px; " placeholder="Write New Notice ...."></textarea>
		<button  style="margin-top: -50px; margin-bottom: 50px; float: right;" onclick="fireNotice('user')">Submit</button>

		<ul>
			<li><button id="user-notice-details" onclick="userNotice()" >Notice to User</button></li>
			<li><button id="user-complaint-details" onclick="userComplaints()" >User Complaints</button></li>
			<li><button id="owner-notice-details" onclick="ownersNotice()" >Notice to Owner</button></li>
			<li><button id="owner-complaint-details" onclick="ownersComplaints()">Owner Complaints</button></li>
		</ul>

			`

		document.getElementById('user-notice-details').style.backgroundColor = 'white';
		document.getElementById('user-notice-details').style.color = 'black';

		document.getElementById('user-complaint-details').style.backgroundColor = 'rgba(0,0,0,0.1)';
		document.getElementById('user-complaint-details').style.color = 'white';
		document.getElementById('owner-notice-details').style.backgroundColor = 'rgba(0,0,0,0.1)';
		document.getElementById('owner-notice-details').style.color = 'white';
		document.getElementById('owner-complaint-details').style.backgroundColor = 'rgba(0,0,0,0.1)';
		document.getElementById('owner-complaint-details').style.color = 'white';

		var users = [];
		var i=0;
		await db.collection('propertyNoticeToUser').get().then(querySnapshot =>{
			  	querySnapshot.docs.map((doc) => {
			  		users[i] = doc.id;
			  		i++
        		})
			 })
			
		 users.forEach( async function(element, index) {
				var user = element
				await db.collection('propertyNoticeToUser').doc(element).get().then(res =>{
				 		 	var arr = res.data().notice;
				 		 	arr.forEach( function(element, index) {
				 		 		
				 		 		var newEle = `
				 		 			User : ${user}
				 		 			<br>
				 		 			Date : ${element.date} 
				 		 			<br>
				 		 			Notice : ${element.notice}
				 		 			<hr style="border:1px solid #ddd;">
				 		 			<br>
				 		 		`
				 		 		document.getElementById('all-detalis').innerHTML= newEle + document.getElementById('all-detalis').innerHTML;
				 		 	})
				 		 })

			});



		}


		// to view notice of owner by company member portal
		async function ownersNotice(){
			document.getElementById('head-agent').textContent="Notice to Owners";
			document.getElementById('head-agent').style.display = 'block';
			document.getElementById('all-detalis').innerHTML =`

				<input type="text" id="notice-fire" placeholder="User Id : usernamephone">
		<textarea id="new-notice" style="margin:50px auto; background-color: rgba(0,0,0,0.2); color:white;font-family:Bahnschrift;width: 100%; height:200px; " placeholder="Write New Notice ...."></textarea>
		<button  style="margin-top: -50px; margin-bottom: 50px; float: right;" onclick="fireNotice('owner')">Submit</button>

		<ul>
			<li><button id="user-notice-details" onclick="userNotice()" >Notice to User</button></li>
			<li><button id="user-complaint-details" onclick="userComplaints()" >User Complaints</button></li>
			<li><button id="owner-notice-details" onclick="ownersNotice()" >Notice to Owner</button></li>
			<li><button id="owner-complaint-details" onclick="ownersComplaints()">Owner Complaints</button></li>
		</ul>

			`

		document.getElementById('owner-notice-details').style.backgroundColor = 'white';
		document.getElementById('owner-notice-details').style.color = 'black';

		document.getElementById('user-complaint-details').style.backgroundColor = 'rgba(0,0,0,0.1)';
		document.getElementById('user-complaint-details').style.color = 'white';
		document.getElementById('user-notice-details').style.backgroundColor = 'rgba(0,0,0,0.1)';
		document.getElementById('user-notice-details').style.color = 'white';
		document.getElementById('owner-complaint-details').style.backgroundColor = 'rgba(0,0,0,0.1)';
		document.getElementById('owner-complaint-details').style.color = 'white';


		var owners = [];
		var i=0;
		await db.collection('propertyNoticeToOwner').get().then(querySnapshot =>{
			  	querySnapshot.docs.map((doc) => {
			  		owners[i] = doc.id;
			  		i++;
        		})
			 })
			
		 owners.forEach( async function(element, index) {
				var owner = element
				await db.collection('propertyNoticeToOwner').doc(element).get().then(res =>{
				 		 	var arr = res.data().notice;
				 		 	arr.forEach( function(element, index) {
				 		 		
				 		 		var newEle = `
				 		 			User : ${owner}
				 		 			<br>
				 		 			Date : ${element.date} 
				 		 			<br>
				 		 			Notice : ${element.notice}
				 		 			<hr style="border:1px solid #ddd;">
				 		 			<br>
				 		 		`
				 		 		document.getElementById('all-detalis').innerHTML= newEle + document.getElementById('all-detalis').innerHTML;
				 		 	})
				 		 })

			});



		}


		// to view complaint of owner by company member portal
		async function ownersComplaints(){
			document.getElementById('head-agent').textContent="Complaint of Owners";
			document.getElementById('head-agent').style.display = 'block';
			document.getElementById('all-detalis').innerHTML =`

		<ul>
			<li><button id="user-notice-details" onclick="userNotice()" >Notice to User</button></li>
			<li><button id="user-complaint-details" onclick="userComplaints()" >User Complaints</button></li>
			<li><button id="owner-notice-details" onclick="ownersNotice()" >Notice to Owner</button></li>
			<li><button id="owner-complaint-details" onclick="ownersComplaints()">Owner Complaints</button></li>
		</ul>

			`

		document.getElementById('owner-complaint-details').style.backgroundColor = 'white';
		document.getElementById('owner-complaint-details').style.color = 'black';

		document.getElementById('user-complaint-details').style.backgroundColor = 'rgba(0,0,0,0.1)';
		document.getElementById('user-complaint-details').style.color = 'white';
		document.getElementById('user-notice-details').style.backgroundColor = 'rgba(0,0,0,0.1)';
		document.getElementById('user-notice-details').style.color = 'white';
		document.getElementById('owner-notice-details').style.backgroundColor = 'rgba(0,0,0,0.1)';
		document.getElementById('owner-notice-details').style.color = 'white';

			var owners = [];
			var i=0;
			await db.collection('ownerComplaint').get().then(querySnapshot =>{
				  	querySnapshot.docs.map((doc) => {
				  		owners[i] = doc.id;
				  		i++
	        		})
				 })
			
		 owners.forEach( async function(element, index) {
				var owner = element
				await db.collection('ownerComplaint').doc(element).get().then(res =>{
				 		 	var arr = res.data().complaint;
				 		 	arr.forEach( function(element, index) {
				 		 		
				 		 		var newEle = `
				 		 			User : ${owner}
				 		 			<br>
				 		 			Date : ${element.date} 
				 		 			<br>
				 		 			Complaint : ${element.complaint}
				 		 			<hr style="border:1px solid #ddd;">
				 		 			<br>
				 		 		`
				 		 		document.getElementById('all-detalis').innerHTML= newEle + document.getElementById('all-detalis').innerHTML;
				 		 	})
				 		 })

			});

		}



		// to view complaint of user by company member portal
		async function userComplaints(){
			document.getElementById('head-agent').textContent="Complaint of Users";
			document.getElementById('head-agent').style.display = 'block';

			document.getElementById('all-detalis').innerHTML =`

		<ul>
			<li><button id="user-notice-details" onclick="userNotice()" >Notice to User</button></li>
			<li><button id="user-complaint-details" onclick="userComplaints()" >User Complaints</button></li>
			<li><button id="owner-notice-details" onclick="ownersNotice()" >Notice to Owner</button></li>
			<li><button id="owner-complaint-details" onclick="ownersComplaints()">Owner Complaints</button></li>
		</ul>

			`

		document.getElementById('user-complaint-details').style.backgroundColor = 'white';
		document.getElementById('user-complaint-details').style.color = 'black';

		document.getElementById('owner-complaint-details').style.backgroundColor = 'rgba(0,0,0,0.1)';
		document.getElementById('owner-complaint-details').style.color = 'white';
		document.getElementById('user-notice-details').style.backgroundColor = 'rgba(0,0,0,0.1)';
		document.getElementById('user-notice-details').style.color = 'white';
		document.getElementById('owner-notice-details').style.backgroundColor = 'rgba(0,0,0,0.1)';
		document.getElementById('owner-notice-details').style.color = 'white';

			var users = [];
			var i=0;
			await db.collection('userComplaint').get().then(querySnapshot =>{
				  	querySnapshot.docs.map((doc) => {
				  		users[i] = doc.id;
				  		i++
	        		})
				 })
			
		 users.forEach( async function(element, index) {
				var user = element
				await db.collection('userComplaint').doc(element).get().then(res =>{
				 		 	var arr = res.data().complaint;
				 		 	arr.forEach( function(element, index) {
				 		 		
				 		 		var newEle = `
				 		 			User : ${user}
				 		 			<br>
				 		 			Date : ${element.date} 
				 		 			<br>
				 		 			Complaint : ${element.complaint}
				 		 			<hr style="border:1px solid #ddd;">
				 		 			<br>
				 		 		`
				 		 		document.getElementById('all-detalis').innerHTML= newEle + document.getElementById('all-detalis').innerHTML;
				 		 	})
				 		 })

			});

		}


		// to fire notice by company member
		function fireNotice(person){

			if(person==='owner'){

				let owner = document.getElementById('notice-fire').value;
				let newNotice = document.getElementById('new-notice').value;
				var today = new Date();
				db.collection('propertyNoticeToOwner').doc(owner).update({
					notice:  firebase.firestore.FieldValue.arrayUnion({
						notice:	newNotice,		
						date: today.getDate()+"-" +(today.getMonth()+1)+"-"+today.getFullYear()
					})

				}).then(res =>{
					document.getElementById('owner-notice-details').click();
				})
				.catch(err =>{
					alert('Wrong User ID')
					})

			}

			else if(person === 'user'){
				let user = document.getElementById('notice-fire').value;
				let newNotice = document.getElementById('new-notice').value;
				var today = new Date();
				db.collection('propertyNoticeToUser').doc(user).update({
					notice:  firebase.firestore.FieldValue.arrayUnion({
						notice:	newNotice,		
						date: today.getDate()+"-" +(today.getMonth()+1)+"-"+today.getFullYear()
					})

					 

				}).then(res =>{
					document.getElementById('user-notice-details').click();
				})
				.catch(err =>{
					alert('Wrong User ID')
				})
			}

		}



		// to put complaint either by user or owner
		function fileComplaint(people){

			if(people === 'owner'){

				var name = document.getElementById('o-name').value.toLowerCase();
				var phone = document.getElementById('o-phone').value.toString();
				var home = document.getElementById('property-complaint').value
				var complaint = document.getElementById('complaint-box').value
				var today = new Date();

				if(complaint!="" && home!="" ){
					document.getElementById('conformation').style.display = 'block';
						db.collection('ownerComplaint').doc(name+phone).update({
				    		complaint:  firebase.firestore.FieldValue.arrayUnion({
				    			complaint: complaint,
								ownerid: name,
							 	propertyid: home,
							 	date: today.getDate()+"-" +(today.getMonth()+1)+"-"+today.getFullYear()
				    			})
							}).then(res =>{
						 		document.getElementById('img-conf').src = "src/assets/tick.gif";
						 		setTimeout(function(){location.reload()},2000)
						 	})	
					}
			}
			else if(people === 'user')
			{
				var name = document.getElementById('u-name').value.toLowerCase();
				var phone = document.getElementById('u-phone').value.toString();
				var home = document.getElementById('property-complaint').value;
				var complaint = document.getElementById('complaint-box').value;
				var today = new Date();

					if(complaint!="" && home!="" ){
						document.getElementById('conformation').style.display = 'block';
						db.collection('userComplaint').doc(name+phone).update({
				    		complaint:  firebase.firestore.FieldValue.arrayUnion({
				    			complaint: complaint,
								userid: name,
							 	propertyid: home,
							 	date: today.getDate()+"-" +(today.getMonth()+1)+"-"+today.getFullYear()
				    		})

				    	}).then(res =>{
						 		document.getElementById('img-conf').src = "src/assets/tick.gif";
						 		setTimeout(function(){location.reload()},2000)
						 	})
					}

			}


		}
