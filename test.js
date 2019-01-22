// REQUEST_RESPONSE

// var request = require('request-promise');
// request({
//   "method":"GET", 
//   "uri": "https://api.github.com/repos/SJSU272LabF18/Project-Team-9/collaborators?access_token=",
//   "json": true,
//   "headers": {
//     //"Authorization": "Bearer " + github.token,
//     "User-Agent": "My little demo app"
//   }
// }).then((response)=>{
//     console.log(response);
// });

var github = require('octonode');
var github_token = "";
var github_owner = "thevarunjain";
var github_repo = "demo";
var github_org = "SJSU272LabF18";
var client = github.client(github_token);
var res = "";
var open,closed = 0;
var ghorg = client.org('SJSU272LabF18');

// client.get(`/repos/${github_owner}/${github_repo}/issues`, {}, function (err, status, body, headers) {
    // client.get(`/orgs/${github_org}/repos/Project-Team-21/commits`, {}, function (err, status, result, headers) {
client.get(`/repos/SJSU272LabF18/Project-Team-21/commits`, {}, function (err, status, result, headers) {


    // console.log(result[0].commit.author.name)
        result.map((data)=>{
        console.log(data.commit.author.name);
    })
}); 