function getTweetsInfo(callback) {
  var cb = new Codebird;
  cb.setConsumerKey("WOQvNiKyH6zI9Psozm6QwTZ7v", "Ltjz6mH3cN0Ks4GwQzxeS8ck772PoY9Ss1tXDrDsSABXod2mGP");
  cb.setToken("21333319-pQ8bNbx1LvLwbFh4GSKrDzykRZlco241OnONx9Xzf", "RRP4iCLmtrhYzDMitwB4NjNlZQkSyhe9f98dU7K5XmhNT");

  console.log(cb)
  
  var params = {
    q: "#Quirinale2015",
    result_type : "mixed",
    count: 100
};
cb.__call(
    "search_tweets",
    params,
    function (reply) {
      /*console.log("returned")*/
        /*console.log(JSON.stringify(reply.statuses));*/
        
        
        var filtered = JSON.parse(JSON.stringify(reply)).statuses.filter(function (row) {
      		return (row.coordinates != null || row.place != null || row.geo != null) //|| row.user.geo_enabled == true)
      		});
        
        /*contentElement.innerText = JSON.stringify(filtered)*/
        
        var results = []
        
        filtered.forEach(function(entry) {
          console.log(entry);
          results.push({'text': entry.text,'geo': entry.geo})
        });
        
        
        callback(results)
    }
);
}