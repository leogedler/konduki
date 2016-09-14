var ParseServer = false;
var apiUrl;

// Konduki (Parse)
Parse.initialize("BxlpyxwjTtF0a3zO5cGpbwjJ2EcNocq9BJDyLdzf", "CGnnJuGoeQn8PCGvuSHFyeHA5OlzesC2GVt2UrD0");
ParseServer = true;


if (ParseServer) {
	apiUrl = 'https://api.parse.com/1';
}else{
	apiUrl = 'http://52.37.200.194/parse';
};


// Konduki (Server)
// Parse.initialize("sohamfitId", "unused");
// Parse.serverURL = apiUrl;


var mGetHeaderJson 
if (ParseServer) {

	mGetHeaderJson = {
		// Konduki (Parse)
		'X-Parse-Application-Id':'BxlpyxwjTtF0a3zO5cGpbwjJ2EcNocq9BJDyLdzf', 
		'X-Parse-REST-API-Key' :'4gNsdezOs9LQWIswvs0P0sZR5O0ZKlk3Lt0uySTj'
	}
}else{
	mGetHeaderJson = {
		// Konduki (Server)
		'X-Parse-Application-Id':'sohamfitId',
		'Content-Type': 'application/json'
	}
};


	
var mPostPutHeaderJson 
if (ParseServer) {
	mPostPutHeaderJson = {
		// Konduki (Parse)
		'X-Parse-Application-Id':'BxlpyxwjTtF0a3zO5cGpbwjJ2EcNocq9BJDyLdzf', 
		'X-Parse-REST-API-Key' :'4gNsdezOs9LQWIswvs0P0sZR5O0ZKlk3Lt0uySTj',
		'Content-Type': 'application/json'
	}

}else{
	mPostPutHeaderJson = {
		// Konduki (Server)
		'X-Parse-Application-Id':'sohamfitId',
		'Content-Type': 'application/json'
	}
};



// var mUpdateUserHeaderJson;
// if (ParseServer) {
// 	if (mCurrentUser != null) {
// 		mUpdateUserHeaderJson = {
// 			// Konduki (Parse)
// 			'X-Parse-Application-Id':'BxlpyxwjTtF0a3zO5cGpbwjJ2EcNocq9BJDyLdzf', 
// 			'X-Parse-REST-API-Key' :'4gNsdezOs9LQWIswvs0P0sZR5O0ZKlk3Lt0uySTj',
// 			'X-Parse-Session-Token' : mCurrentUser.getSessionToken(),
// 			'Content-Type': 'application/json'
// 		}
// 	};

// }else{
// 	if (mCurrentUser != null) {
// 		mUpdateUserHeaderJson = {
// 			// Konduki (Server)
// 			'X-Parse-Application-Id':'sohamfitId',
// 			'X-Parse-Session-Token' : mCurrentUser.getSessionToken(),
// 			'Content-Type': 'application/json'
// 		}
// 	};
// };



var mPostImageHeaderJson 
if (ParseServer) {
	mPostImageHeaderJson = {
		// Konduki (Parse)
		'X-Parse-Application-Id':'BxlpyxwjTtF0a3zO5cGpbwjJ2EcNocq9BJDyLdzf', 
		'X-Parse-REST-API-Key' :'4gNsdezOs9LQWIswvs0P0sZR5O0ZKlk3Lt0uySTj',
		'Content-Type': 'image/jpeg'
	}
}else{
	mPostImageHeaderJson = {
		// Konduki (Server)
		'X-Parse-Application-Id':'sohamfitId',
		'Content-Type': 'image/jpeg'
	}
};