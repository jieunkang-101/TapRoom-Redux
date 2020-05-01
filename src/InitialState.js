// import { v4 } from 'uuid';

const initialState = {
  // visibilityFilter: VisibilityFilters.SHOW_TAP_MENU,
  masterTapMenu: {
    [1]: { 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTr4-0GqixCFrqtZ8bEgiwkRdGYXcyNlD0TpX3PMwzJx4b9r8SS&usqp=CAU",
      name: "MIRROR POND PALE ALE",
      brand: "DESCHUTES",
      price: "3",
      abv: "12",
      pints: 3,
      message:"Almost Empty",
      id: 1
    },
    [2]: {
      img: "https://pbs.twimg.com/profile_images/1118565165480337408/hTb40HYf.png",
      name: "CZECH-STYLE PILSNER",
      brand: "BUOY",
      price: "11",
      abv: "9.8",
      pints: 124,
      message:"Enough",
      id: 2
    },
    [3]: {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRAk98i_WUT93Ab5sOy0uCIjIkA4rQUYVRM_P_nyifr3P34a5la&usqp=CAU",
      name: "Barrel Aged IPA",
      brand: "GIGANTIC",
      price: "13",
      abv: "11.4",
      pints: 124,
      message:"Enough",
      id: 3
    },
    [4]: {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT9z4LT7645EIuXtmxydA-Axpv0eh9m8CLr0HVOAi6_AuRh1zdq&usqp=CAU",
      name: "Mosaic Hopped CREAM ALE",
      brand: "BRIDGEPORT",
      price: "10.5",
      abv: "10",
      pints: 12,
      message:"Enough",
      id: 4
    }
  }
}

export default initialState;