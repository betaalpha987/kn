// dist: distribution array. dRot: distrib. rotation offset. src: source images. obj: topping objects created and deleted. interv: interval reference.
const topps = {
  ham: {dist:[0,3,6,7], dRot:0.3,  src: ["piz_ing_ham.svg"], obj:[], interv:0 },
  bacon: {dist:[1,3,5], dRot:0.2,    src: ["piz_ing_bacon.svg"], obj:[], inter:0},
  pepperoni: {dist:[0,3,6,7], dRot:0.5,  src: ["piz_ing_pepperoni.svg"], obj:[], interv:0 },
  salami: {dist:[1,3,5], dRot:0.75,  src: ["piz_ing_salami.svg"], obj:[], interv:0 },
  shrimps: {dist:[0,3,6,7], dRot:0.3,  src: ["piz_ing_shrimp.svg"], obj:[], interv:0 },
  mushrooms: {dist:[1,2,5,8], dRot:0.45,  src: ["piz_ing_mushroom.svg"], obj:[], interv:0 },
  tomato: {dist:[1,3,6,7], dRot:0.1,  src: ["piz_ing_tomato.svg"], obj:[], interv:0 },
  pineapple: {dist:[1,0,6], dRot:0.1,  src: ["piz_ing_pineapple.svg"], obj:[], interv:0 },
  redonion: {dist:[0,3,7], dRot:0.6,  src: ["piz_ing_redonion.svg"], obj:[], interv:0 },
  jalapenos: {dist:[0,3,6], dRot:0.7,    src: ["piz_ing_greenchilli.svg", "piz_ing_redchilli.svg"], obj:[], inter:0},
  peppers: {dist:[0,3,7], dRot:0.8,  src: ["piz_ing_greenpepper.svg", "piz_ing_redpepper.svg", "piz_ing_yellowpepper.svg"], obj:[], interv:0 },
  olives: {dist:[1,3,6,7], dRot:0.25,  src: ["piz_ing_greenolive.svg", "piz_ing_blackolive.svg"], obj:[], interv:0 },
  basil: {dist:[0,2,5], dRot:0.35,  src: ["piz_ing_basil.svg"], obj:[], interv:0 },
  parsley: {dist:[0,2,5], dRot:0.75,  src: ["piz_ing_parsley.svg"], obj:[], interv:0 },
  groundchili: {dist:[1,4,12,20], dRot:0, src: ["piz_ing_redgroundc.svg", "piz_ing_yellowgroundc.svg", "piz_ing_orangegroundc.svg"], grpsrc: "piz_ing_grp_groundc.svg", obj:[], inter:0},
};

// Toppings are dropped in order onto pizza, so seasonings should go last.
const setToppings = { 
margherita:  {name: "Margherita", ingred: []},
hawaiian:    {name: "Hawaiian", ingred: ["ham", "pineapple"]},
surfnturf:   {name: "Surf n' Turf", ingred: ["bacon", "shrimps"]},
farmhouse:   {name: "Farmhouse", ingred: ["ham", "mushrooms","tomato"]},
meatfeast:   {name: "Meat Feast", ingred: ["bacon", "ham","pepperoni"]},
vegetarian:  {name: "Vegetarian", ingred: ["mushrooms", "peppers","redonion","tomato"]},
sizzler:     {name: "Sizzler", ingred: ["jalapenos", "pepperoni","peppers","redonion"]},
supreme:     {name: "Supreme", ingred: ["bacon", "ham","mushrooms","olives","pepperoni","tomato","basil"]},
vegsupreme:  {name: "Veg Supreme", ingred: ["mushrooms","olives","peppers","redonion","tomato","parsley","basil"]}
};

module.exports = {
  topps: topps,
  setToppings: setToppings
};