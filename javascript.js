const storeOwners = [
    {
      name: 'charles',
      stores: 1,
      location: null,
    },
    {
      name: 'sally',
      stores: 1,
      location: null,
    },
    {
      name: 'cassandra',
      stores: 1,
      location: null,
    },
    {
      name: 'Danny Shavez',
      stores: 1,
      location: "NM",
    },
  ];
  
  const listNumberOfStores = function () {
    let totalLocations = 0; 
    for (let i = 0; i < storeOwners.length; i++) {
      totalLocations += storeOwners[i].stores; 
    }
    return totalLocations; 
  };
  
  let locations = listNumberOfStores(); 
  
  function tellMeMyStores() {
    console.log('Hey, can you tell me how many stores you have?');
    if (locations > 0) {
      console.log(`Of course, we have ${locations} stores`);
    }
  };
  
  function hasStore() {
    console.log('Hey, can you tell me who owns stores?');
    for (let i = 0; i < storeOwners.length; i++) {
      let person = storeOwners[i].name;
      let location = storeOwners[i].location;
      if (storeOwners[i].location === null) {
        console.log(`Yes, ${person} has one`);
      } else {
        console.log(`Yes, ${person} that lives in ${location} owns one too.`);
      }
    }
  };
  
  tellMeMyStores();
  hasStore();