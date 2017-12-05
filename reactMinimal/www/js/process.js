let process = {
	menu:function(){
		let content = <ul><center>
		<h1>Recipe List</h1>
			<a href='#' onClick={process.page1}><button class="accordion">Spicy Chilli Chicken Stir-Fry</button></a><br/>
		<a href='#' onClick={process.page2}><button class="accordion">Sticky Honey Soy Chicken Wings</button></a>
		<a href='#' onClick={process.page3}><button class="accordion">Duck Stew with Five Spices</button></a>
		<a href='#' onClick={process.page4}><button class="accordion">Creamy Cashew Pasta</button></a>
		<a href='#' onClick={process.page5}><button class="accordion">Bistek Tagalog</button></a>
		<a href='#' onClick={process.page6}><button class="accordion">Pininyahang Manok</button></a>
		<a href='#' onClick={process.page7}><button class="accordion">Chicken Arroz Caldo</button></a>
		<a href='#' onClick={process.page8}><button class="accordion">Salted Egg Chicken</button></a>
		<a href='#' onClick={process.page9}><button class="accordion">Kare-kare</button></a>
		<a href='#' onClick={process.page10}><button class="accordion">Chicken Tinola</button></a>
		<a href='#' onClick={process.page11}><button class="accordion">Sopas</button></a>
		<a href='#' onClick={process.page12}><button class="accordion">Chicken Pork Adobo</button></a>
		<a href='#' onClick={process.page13}><button class="accordion">Bicol Express</button></a>
		<a href='#' onClick={process.page14}><button class="accordion">Spicy Grilled Chicken</button></a>
		<a href='#' onClick={process.page15}><button class="accordion">Beef Kaldereta</button></a>
		<a href='#' onClick={process.page16}><button class="accordion">Spaghetti with "Last Minute" Tomato Sauce</button></a>


		</center></ul>;
		ReactDOM.render(content,document.getElementById('root'));
	},
	page1:function(){
		let content = <div><center>
				<img src="img/1.jpg"></img><br/>
				<h2>Spicy Chilli Chicken Stir-Fry</h2><br/>
				<p>INGREDIENTS<br/>
				1.5 cups of toasted Cashews<br/>
				4 Star anise<br/>
6 Cloves<br/>
2 Cinnamon sticks<br/>
8 Garlic cloves<br/>
10 Ginger slices<br/>
4 Galangal slices<br/>
3 teaspoons Five spice powder<br/>
2 teaspoons White pepper<br/>
6 tablespoons Light soy sauce<br/>
2 tablespoons Dark soy sauce<br/>
2 teaspoons Rock sugar<br/>
4 Spring onion stalks<br/>
4 cups Water<br/>
1 whole Duck<br/>
Steamed rice to serve</p><br/>

				<a href='#' onClick={process.menu}>back</a>
			</center></div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page2:function(){
		let content = <div><center>
		<img src="img/2.jpg"></img><br/>
				<h2>Sticky Honey Soy Chicken Wings</h2>
				 <p>INGREDIENTS<br/>
1 kilogram Chicken wings<br/>
1 teaspoon Salt<br/>
½ teaspoon Black pepper<br/>
1 tablespoon of Cooking oil<br/><br/>
GLAZE:<br/>
3-cm piece of Ginger, peeled and grated<br/>
3 cloves Garlic, finely chopped<br/>
60 millilitres Honey<br/>
2 tablespoons Soy sauce<br/>
60 millilitres Water<br/><br/>
METHOD<br/>
In a small saucepan, simmer all the glaze ingredients together over a medium heat until thickened and reduced to 60ml liquid altogether. This takes about 8 minutes. Let it cool<br/>
Preheat the oven to 200C<br/>
Toss the chicken wings together with the salt, pepper, oil and glaze on a baking tray. Bake for 45-50 minutes, until cooked through and golden brown. If the wings are getting too charred at<br/> any point, turn the heat down to 180C and continue cooking<br/>
Serve!</p><br/>
<a href='#' onClick={process.menu}>back</a>
			</center></div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page3:function(){
		let content = <div><center>
		<img src="img/3.jpg"></img><br/>
		<h2>Duck Stew with Five Spices</h2>
				 <p>INGREDIENTS<br/>
4 Star anise<br/>
6 Cloves<br/>
2 Cinnamon sticks<br/>
8 Garlic cloves<br/>
10 Ginger slices<br/>
4 Galangal slices<br/>
3 teaspoons Five spice powder<br/>
2 teaspoons White pepper<br/>
6 tablespoons Light soy sauce<br/>
2 tablespoons Dark soy sauce<br/>
2 teaspoons Rock sugar<br/>
4 Spring onion stalks<br/>
4 cups Water<br/>
1 whole Duck<br/>
Steamed rice to serve<br/><br/>
METHOD<br/>
In a deep pan with some cooking oil, fry the star anise, cloves and cinnamon for a few minutes<br/>
Then, add the garlic, ginger, galangal, five spice powder, pepper, light and dark soy sauce, rock sugar, spring onion and water into the pan together with the duck<br/>
Bring to a slow boil then simmer on low heat and half way through, turn the duck over<br/>
Cook until the duck is tender, this should take about 30 minutes<br/>
Cut into bite size and serve with rice</p><br/>
<a href='#' onClick={process.menu}>back</a>
			</center></div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page4:function(){
	let content = <div><center>
		<img src="img/4.jpg"></img><br/>
			<h2>Creamy Cashew Pasta</h2>
				<p>INGREDIENTS<br/>
1.5 cups of toasted Cashews<br/>
4 Star anise<br/>
6 Cloves<br/>
2 Cinnamon sticks<br/>
8 Garlic cloves<br/>
10 Ginger slices<br/>
4 Galangal slices<br/>
3 teaspoons Five spice powder<br/>
2 teaspoons White pepper<br/>
6 tablespoons Light soy sauce<br/>
2 tablespoons Dark soy sauce<br/>
2 teaspoons Rock sugar<br/>
4 Spring onion stalks<br/>
4 cups Water<br/>
1 whole Duck<br/>
Steamed rice to serve<br/><br/>
METHOD<br/>
In a deep pan with some cooking oil, fry the star anise, cloves and cinnamon for a few minutes<br/>
Then, add the garlic, ginger, galangal, five spice powder, pepper, light and dark soy sauce, rock sugar, spring onion and water into the pan together with the duck<br/>
Bring to a slow boil then simmer on low heat and half way through, turn the duck over<br/>
Cook until the duck is tender, this should take about 30 minutes<br/>
Cut into bite size and serve with rice<br/>
1 large clove Garlic<br/>
1 sprigs of Tarragon or fresh Oregano<br/>
½ cup Ricotta cheese<br/>
Extra Virgin Olive oil<br/>
Parmesan or Pecorino<br/>
1 package Linguine<br/>
Sea salt<br/>
Black Pepper<br/>
Chilli flakes<br/>
1 Lemon<br/><br/>
METHOD<br/>
Place cashews, garlic, pinch of salt & pepper in a food processor<br/>
Drizzle olive oil while the machine is on, creating a paste<br/>
Transfer the cashew paste to large bowl, and mix in ricotta cheese<br/>
Zest the lemon, and chop herbs finely<br/>
Stir into the cashew and cheese mixture<br/>
Cook pasta according to package directions<br/>
Before draining pasta, reserve about 1 cup of cooking water<br/>
Drain pasta<br/>
Pour half the reserved cooking water over the cashew sauce to loosen<br/>
Pour pasta immediately over sauce<br/>
Toss and adjust thickness by adding more water. Sprinkle in chilli flakes if desired<br/>
Texture of dish should be loose, but not watery<br/>
Top with parmesan cheese and chopped parsley</p><br/>
<a href='#' onClick={process.menu}>back</a>
			</center></div>;
			ReactDOM.render(content,document.getElementById('root'));

	},
	page5:function(){
	let content = <div><center>
		<img src="img/5.jpg"></img><br/>
		<h2>Bistek Tagalog</h2>
				<p><h4>INGREDIENTS</h4><br/>
1 kilogram Beef Tenderloin, Sliced Thinly<br/>
8 pieces Calamansi, Squeezed<br/>
2 whole White Onions, Sliced into Rings<br/>
8 cloves Garlic, Crushed<br/>
5 tablespoons Soy Sauce<br/>
1 tablespoon Vegetable Oil<br/>
2 tablespoons Butter<br/>
TT Sugar<br/>
1 tablespoon Black peppercorns, crushed<br/><br/>
METHOD<br/>
Marinate sliced beef with calamansi, soy sauce, and crushed peppercorns for 1 hour<br/>
Heat oil in a pan, sauté the onions until it slightly caramelizes. Set aside<br/>
In the same pan, add in the marinated beef until it browns. Set aside<br/>
Saute the garlic in the same pan until aromatic then add in the marinade. Simmer<br/>
Toss the beef back in and let it cook until it is tender. Season with salt and add sugar if needed<br/>
Add in the onions rings and serve with rice</p><br/>
<a href='#' onClick={process.menu}>back</a>
			</center></div>;
			ReactDOM.render(content,document.getElementById('root'));
			
	},
	page6:function(){
	let content = <div><center>
		<img src="img/6.jpg"></img><br/>
		<h2>Pininyahang Manok</h2>
				 <p>INGREDIENTS<br/>
1 kilogram Chicken, Leg-thigh (boneless)<br/>
3 whole Tomatoes, chopped<br/>
1 whole Carrot, Chopped<br/>
3 tablespoons Fish sauce<br/>
125 millilitres Evaporated Milk<br/>
3 tablespoons Garlic, crushed<br/>
1 whole Onion, sliced<br/>
1 tablespoon Vegetable oil<br/>
1 can Pineapple Chunks<br/>
1 whole Green bell pepper, chopped<br/>
1 whole Red bell pepper, chopped<br/>
100 grams Cashew nuts, toasted<br/><br/>
METHOD<br/>
Marinate chicken in pineapple juice from the can for 30 mins<br/>
Heat oil in a pan, sauté onion, garlic, and tomatoes<br/>
Add in the chicken and cook until brown<br/>
Pour in the pineapple juice and evaporated milk. Bring to a boil and then simmer<br/>
Add in the pineapple chunks, and carrots. Cook until the chicken is cooked<br/>
Add the bell peppers, cashew nuts, and season with fish sauce.<br/>
Serve</p>
				<br/><a href='#' onClick={process.menu}>back</a></center>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
			
	},
	page7:function(){
	let content = <div><center>
		<img src="img/7.jpg"></img><br/>
		<h2>Chicken Arroz Caldo</h2>
				<p>INGREDIENTS<br/>
1 whole Chicken bone-in (around 1.2kilos), Cut into 8ths<br/>
1 whole White Onion, Sliced<br/>
5 cloves Garlic, crushed<br/>
30 grams ginger, sliced or grated<br/>
1 tablespoon Fish sauce<br/>
1 cup uncooked Rice<br/>
7 cups Water<br/>
TT Salt<br/>
TT Pepper<br/>
<br/>
GARNISH:<br/>
2 tablespoons Annato Oil<br/>
Chopped Scallions<br/>
1 whole Hardboiled egg<br/>
2 pieces Calamansi<br/>
Fried Garlic Bits<br/>
<br/>
METHOD<br/>
Heat oil in a pot and sauté onions, ginger, and garlic<br/>
Add in the chicken and cook until brown. Pour the fish sauce and let it simmer for a min<br/>
Add the rice and cook for a bit. Stirring constantly<br/>
Add the water in and bring to a boil, skim the scum. Stir occasionally until the rice is cooked<br/>
Season with salt and pepper<br/>
Serve on bowls and garnish</p><br/>
<a href='#' onClick={process.menu}>back</a></center>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
			
	},
	page8:function(){
	let content = <div><center>
		<img src="img/8.jpg"></img><br/>
		<h2>Salted Egg Chicken</h2>
				<p>INGREDIENTS<br/>
  1 kilogram Chicken Fillets, cut into strips<br/>
  1 cup Potato Starch<br/>
  1 cup Rice Starch<br/>
  6 stalks Curry Leaves<br/>
  6 Salted Egg Yolks, boiled and grated<br/>
  125 grams Butter<br/>
  1 ½ cups Cooking Oil<br/>
  Salt to taste<br/>
<br/>
  METHOD<br/>
1.In a mixing bowl, mix equal amounts of both starches seasoned with salt.<br/>
2.Coat chicken with the mix of two seasoned startches.<br/>
3.Deep fry until golden and almost cooked through.<br/>
4.In a wok, melt butter on medium heat for sautéing curry leaves for a minute until fragrant.<br/>
5.Add grated salted egg yolks and whisk well until combined and foamy.<br/>
6.Add fried chicken, turn off the fire and toss well to coat.<br/>
</p>
<br/><a href='#' onClick={process.menu}>back</a>
			</center></div>;
			ReactDOM.render(content,document.getElementById('root'));
			
	},
	page9:function(){
	let content = <div><center>
		<img src="img/9.jpg"></img><br/>
		<h2>Kare-kare</h2>
				  <p>INGREDIENTS<br/>
  500 grams Oxtail<br/>
500 grams Beef Tripe<br/>
30 grams Peppercorns<br/>
1 whole White Onion<br/>
3 pieces Dried Bay leaves<br/>
TT Fish sauce<br/>
Water<br/>
1 whole White onion; chopped<br/>
1 whole Banana Heart<br/>
12 pieces Sliced eggplants<br/>
8 pieces Bok Choy<br/>
2 cups ground peanuts<br/>
1 cup peanut butter<br/>
250 grams String beans, cut into 3inch segments<br/>
1 litre Water<br/>
1 cup Annatto seeds<br/>
1 cup Ground Rice, toasted<br/>
1 tablespoon Fish Sauce<br/>
Salt<br/>
Pepper<br/><br/>
SHRIMP PASTE:<br/>
Oil<br/>
Shrimp Paste<br/>
Bird’s eye chilli<br/>
White Onion<br/>
Garlic<br/>
TT Cane Vinegar<br/><br/>
METHOD<br/>
Soak annatto seeds in water. Ratio is 1:1<br/>
In a large pot, boil some water and put in the oxtail, tripe, onions, peppercorns, fish sauce and bay leaves . cook until tender<br/>
Then in the same pot, add in the peanuts, peanut butter, and the annatto coloring.<br/>
Bring to a boil and simmer<br/>
Add in the toasted ground rice<br/>
Add in the banana heart, string beans, bokchoy and eggplant. Simmer until the veggies are cooked<br/>
Season with fish sauce, salt and pepper.<br/>
Saute onion and garlic until fragrant, add shrimp paste, cane vinegar and stir until it smooth, then add chopped bird’s eye chilli.<br/>
Serve with shrimp paste<br/>

</p><br/><a href='#' onClick={process.menu}>back</a>
			</center></div>;
			ReactDOM.render(content,document.getElementById('root'));
			
	},
	page10:function(){
	let content = <div><center>
		<img src="img/10.jpg"></img><br/>
		<h2>Chicken Tinola</h2>
				<p>INGREDIENTS<br/>
1 whole Chicken, cut into 8 pcs<br/>
2 pieces Thumb size Ginger, julienned<br/>
1 whole White Onion, chopped<br/>
5 cloves Garlic, Minced<br/>
1 piece Finger Chilli<br/>
2 whole Green Papaya; cubed<br/>
¼ cup Bird’s Eye Chilli Leaves<br/>
5 cups Chicken Stock<br/>
2 tablespoons Fish Sauce<br/>
1 tablespoon Vegetable Oil<br/><br/>
METHOD<br/>
Heat oil in a saucepan, sauté the onion, ginger, green Chilli, and garlic<br/>
Add in chicken and cook until brown<br/>
Pour in the fish sauce and water/chicken stock Boil and then simmer. Add in the papaya until tender and the chicken is cooked through<br/>
Add in the bird’s eye Chilli leaves<br/>
Serve<br/>
</p>
<br/><a href='#' onClick={process.menu}>back</a>
		</center></div>;
			ReactDOM.render(content,document.getElementById('root'));
			
	},
	page11:function(){
	let content = <div><center>
		<img src="img/11.jpg"></img><br/>
		<h2>Sopas</h2>
				 <p>INGREDIENTS<br/>
  1 tablespoon Vegetable oil<br/>
2 tablespoons Butter<br/>
1 whole White Onion, chopped<br/>
500 grams Chicken fillet (Leg thigh)<br/>
5 cups Chicken stock<br/>
3 cups Elbow macaroni<br/>
250 grams Smokey Sausage, sliced<br/>
1 cup Carrots, diced<br/>
1 cup Cabbage, shredded<br/>
1 cup Evaporated Milk<br/>
Salt<br/>
Pepper<br/><br/>
METHOD<br/>
In a sauce pot, boil chicken fillet until it is cooked, and drain and set aside. After it cool then shredded<br/>
In a sauce pot, heat oil and butter<br/>
Add in onions and sauté until translucent, toss in the sausages. Sauté until the fat is rendered<br/>
Add in chicken stock, and milk. Bring to boil<br/>
Add in the macaroni. Once it the macaroni is cooked, add in the carrots<br/>
Once the carrots are tender, and in the cabbage. Simmer until it is cooked<br/>
Serve with shredded chicken fillet on top<br/>
</p>
<br/><a href='#' onClick={process.menu}>back</a>
			</center></div>;
			ReactDOM.render(content,document.getElementById('root'));
			
	},
	page12:function(){
	let content = <div><center>
		<img src="img/12.jpg"></img><br/>
		<h2>Chicken Pork Adobo</h2>
				<p>INGREDIENTS<br/>
    500 grams Chicken, leg thigh quarters (bonein)<br/>
500 grams Pork Belly<br/>
1-2 tablespoon Vegetable Oil<br/>
250 millilitres Water<br/>
2 tablespoons Sugar<br/>
250 millilitres Soy sauce<br/>
500 millilitres Cane Vinegar<br/>
2 pieces Whole Garlic heads, crushed<br/>
2 pieces Dried Bay Leaves<br/>
125 millilitres Liquid Seasoning<br/>
Oyster Sauce<br/>
Salt<br/><br/>
METHOD<br/>
In a deep pan, heat oil. Pan sear the pork belly and the chicken until brown. Set aside<br/>
In the same pan, Saute the garlic until aromatic, then add in the bay leaves, peppercorns, liquid seasoning, oyster sauce, water, sugar and soy sauce<br/>
Put the meats back and bring the liquid to boil, and then lower it down to simmer until the meat is tender<br/>
Add in the vinegar and make sure not to stir until it boils<br/>
Season to taste<br/>
Serve with rice<br/>
  

</p><br/><a href='#' onClick={process.menu}>back</a>
			</center></div>;
			ReactDOM.render(content,document.getElementById('root'));
			
	},
	page13:function(){
	let content = <div><center>
		<img src="img/13.jpg"></img><br/>
		<h2>Bicol Express</h2>
				<p>INGREDIENTS<br/>
    500 grams Pork Belly, cubed<br/>
1 whole White Onion, chopped<br/>
1 thumb Ginger, julienned<br/>
5 cloves Garlic, crushed<br/>
1 cup Coconut Milk<br/>
2 teaspoons Shrimp Paste<br/>
2 tablespoons Fish sauce (marinade)<br/>
1 teaspoon Fish sauce<br/>
2 pieces Chilli Fingers Finger Chillies<br/>
TT Salt<br/>
As needed Water<br/><br/>
METHOD<br/>
Marinate the pork belly in 2 tablespoons of fish sauce for 30 mins<br/>
Heat oil in pan, sauté the garlic, onions and ginger<br/>
Add in the chilli and shrimp paste<br/>
Put in pork and let the fat render a bit<br/>
Pour water In and simmer for 15 mins<br/>
Add in the coconut milk and simmer until the pork is tender<br/>
Season with salt and pepper<br/>
Serve with rice<br/>
  

</p><br/><a href='#' onClick={process.menu}>back</a>
			</center></div>;
			ReactDOM.render(content,document.getElementById('root'));
			
	},
	page14:function(){
	let content = <div><center>
		<img src="img/14.jpg"></img><br/>
		<h2>Spicy Grilled Chicken</h2>
				<p>INGREDIENTS<br/>
    1 Chicken, about 1 kg<br/>
2 tablespoons Dark soy sauce<br/>
2 tablespoons Soy sauce<br/>
1 tablespoon ground Black pepper<br/>
2 teaspoons Salt<br/>
2 teaspoons White pepper<br/><br/>
PASTE:<br/>
6 fresh Red chillies<br/>
10 medium Shallots<br/>
10 cloves Garlic<br/>
240 millilitres Water<br/><br/>
SALAD:<br/>
1 Cucumber, sliced<br/>
¼ Cabbage, sliced<br/>
¼ Green apple, sliced<br/>
1 Red chilli, chopped<br/>
½ each Red bell pepper and Yellow bell pepper, sliced thinly<br/>
½ Carrot, julienned<br/>
½ Persimmon, julienned<br/>
6-8 Cherry tomatoes, halved<br/>
¼ Pomegranate, broken into small pieces<br/><br/>
SALAD DRESSING:<br/>
4 tablespoons Vinegar<br/>
4 tablespoons Lemon juice<br/>
2 tablespoons Sesame oil<br/>
Salt, to season<br/>
Pepper, to season<br/>
½ cup Cilantro, chopped<br/><br/>
METHOD<br/>
Cut the chicken into serving-size portions and score the skin and flesh. Marinate the chicken with 2 tablespoons of dark soy sauce and soy sauce, 1 tablespoon of ground black pepper, 2 <br/>teaspoons of salt and white pepper<br/>
Combine the paste ingredients in a blender and process to a paste-like consistency. It should be thick enough to stick onto the chicken<br/>
Rub an even coat of the paste over the chicken and refrigerate for at least 1 hour or if you have time, it would be best to keep it refrigerated overnight<br/>
Bake the chicken in the oven at 180°C for 35 minutes. Grill the chicken, skin side up until the chicken is golden brown, for about 5 minutes<br/>
For the salad, slice the cucumber, cabbage and green apple. Chop the red chilli, red and yellow bell peppers. Julienne the carrot and persimmon. Cut the tomatoes into halves and break the<br/> pomegranate into small parts<br/>
To make the salad dressing, combine the vinegar, lemon juice, sesame oil, salt, pepper and cilantro in an empty jar and shake hard to mix well<br/>
When you are ready to serve, mix all the vegetables together and drizzle the salad dressing on top, then serve alongside the chicken<br/>
</p>
				<br/><a href='#' onClick={process.menu}>back</a>
			</center></div>;
			ReactDOM.render(content,document.getElementById('root'));
			
	},
	page15:function(){
	let content = <div><center>
		<img src="img/15.jpg"></img><br/>
		<h2>Beef Kaldereta</h2>
				<p>INGREDIENTS<br/>
    1 kilogram Beef Tenderloin, cubed<br/>
1 whole White Onion, chopped<br/>
5 cloves Garlic, crushed<br/>
3 cups Water<br/>
1 piece Red bell pepper, julienned<br/>
1 piece Green bell pepper, julienned<br/>
1 piece Yellow bell pepper, julienned<br/>
2 cups Tomato Sauce<br/>
1 cup Liver spread<br/>
3 pieces Bird's Eye Chilli, chopped<br/>
2 pieces Dried Bay leaves<br/>
1 cup Potatoes, cut into wedges<br/>
2 cups Carrots, cut into wedges<br/>
½ cup Green peas<br/>
2 tablespoons Vegetable oil<br/><br/>
METHOD<br/>
Heat oil in a big saucepot. Sauté the onions and garli<br/>
Sear the beef then add in the bay leaves and birds eye Chillies<br/>
Stir in the liver spread and pour in the tomato sauce and water<br/>
Bring to boil and simmer until the beef is tender<br/>
Mix in the carrots and potatoes and cook until tender<br/>
Add in the green peas and bell peppers.<br/>
Season to taste<br/>
Serve<br/>
  

</p><br/>
				<a href='#' onClick={process.menu}>back</a>
			</center></div>;
			ReactDOM.render(content,document.getElementById('root'));
			
	},
	page16:function(){
	let content = <div><center>
		<img src="img/16.jpg"></img><br/>
		<h2>Spaghetti with "Last Minute" Tomato Sauce</h2>
			
 <p>INGREDIENTS<br/>
    5 ripe fresh tomatoes<br/>
1 teaspoon red wine vinegar<br/>
2 slices Italian bread<br/>
⅓ cup Black olives<br/>
2 tablespoons Capers<br/>
4 stalks Italian parsley<br/>
1 large clove garlic<br/>
Extra Virgin Olive oil<br/>
About 150 grams spaghetti<br/><br/>
METHOD<br/>
Bring pot of salted water to boil<br/>
On a large cutting board, chop tomatoes, olives, capers and parsley<br/>
Grate ½ clove of garlic and combine with chopped ingredients<br/>
Cut bread into cubes and toast in pan with oil and garlic. Once it’s crunchy and golden, blitz in a food processor to make breadcrumbs.<br/>
In same pan, heat olive oil and pour in tomato mixture with a tablespoon of the pasta cooking water.<br/>
Make sure heat is high and “sauce” is bubbling before adding a good pinch of salt<br/>
Add pasta directly to the sauce<br/>
Toss to combine, serve with extra olive oil, parsley and breadcrumbs<br/>
</p><br/>
				<a href='#' onClick={process.menu}>back</a>
			</center></div>;
			ReactDOM.render(content,document.getElementById('root'));
			
	},
	loading:function(){
		let content = <div>
					<center><h2>Loading recipes...</h2></center>
				</div>;
		ReactDOM.render(content,document.getElementById('root'));
	}

}


process.loading();
setTimeout(function(){
	process.menu();
},5000);