function createMenuData(data) {
  var actualData = [];

       data.forEach(item => {
  
          var itemValue   = item.split("/")
          var actualDataItem = actualData.find(p => p["title"]===itemValue[0]);
  
          if (actualDataItem!=null)
              actualDataItem.data.push(itemValue[1]);
          else
               if(itemValue[1]!=undefined )
                  actualData.push({title : itemValue[0],data:[itemValue[1]]});
       });
       
        return actualData; 
}

describe("menu Data Generator", () => {
    it("creates correct data structure ", () => {
      const data = [
        "parent1/parent1child",
        "parent1/parent1child2",
        "parent2/parent2child",
        "parent2/parent2child2",
        "parent1/parent1child3",
        "parent3",
        "parent3/parent3child1",
        "parent4"
      ];
  
      const expectedResult = [
        {
          title: "parent1",
          data: ["parent1child", "parent1child2", "parent1child3"]
        },
        { title: "parent2", data: ["parent2child", "parent2child2"] },
        { title: "parent3", data: ["parent3child1"] }
      ];
  
      const actualResult = createMenuData(data);
      expect(actualResult).toMatchObject(expectedResult);
    });
  });