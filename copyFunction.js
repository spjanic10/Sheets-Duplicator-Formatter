function copyOverFunction() {

// Replaced with placeholder Sheet IDs
  let formResponseSheet = SpreadsheetApp.openById("UniqueSheetID");
  let firstSheet=SpreadsheetApp.openById("UniqueSheetID");

// Getting the values inside the source sheet
  let sourceSheet = firstSheet.getSheets()[0];
  let sourceRange=sourceSheet.getDataRange();
  let sourceValues=sourceRange.getValues();

// Row count of the source sheet
  let rowCount= sourceValues.length;

// Initializing the target sheet
  var targetSheet=formResponseSheet.getSheets()[0];

// Grab the different columns from source sheet and place them in a variable
  var timestamp = sourceSheet.getRange(2,1,rowCount,1).getValues();

  var email=sourceSheet.getRange(2,2,rowCount,1).getValues();

// Needed to concatenate first and last name to place in one destination column
  var firstName=sourceSheet.getRange(2,3,rowCount,1).getValues();
  var lastName=sourceSheet.getRange(2,4,rowCount,1).getValues();

  var fullName=[]
  for(var i=0; i<rowCount; i++){
        fullName[i] = [firstName[i][0]+" "+lastName[i][0]];
    }

  var country=sourceSheet.getRange(2,5,rowCount,1).getValues();
  var city=sourceSheet.getRange(2,6,rowCount,1).getValues();

  var eventDateTime=sourceSheet.getRange(2,7,rowCount,1).getValues();

// Making sure the date and time can be ingested as a String object or as Datetime object
// Outputting into standard format of US Date and 24hr Time
  var date=[];
  var time=[];
  for(var i=0; i<rowCount; i++){
      if (typeof(eventDateTime[i][0])=="string"){
        split=eventDateTime[i][0].split(" ");
        if (split.length==3){
          date[i] = [(new Date(split[0])).toLocaleDateString('en-US')];
          time[i] = [(new Date("1970-01-01 " + split[1])).toLocaleTimeString('it-IT')];
        }
        else{
          date[i] = [""];
          time[i] = [""];
        }

        }
      else{
        date[i] = [(eventDateTime[i][0]).toLocaleDateString('en-US')];
        time[i] = [(eventDateTime[i][0]).toLocaleTimeString('it-IT')];
      }

    }


  var incidentDescription=sourceSheet.getRange(2,8,rowCount,1).getValues();
  var incidentLocation=sourceSheet.getRange(2,9,rowCount,1).getValues();

  var peopleInvolved=sourceSheet.getRange(2,10,rowCount,1).getValues();

  var typeOfEvent=sourceSheet.getRange(2,11,rowCount,1).getValues();

  var injuredOrIll=sourceSheet.getRange(2,12,rowCount,1).getValues();

  var firstNameInjured=sourceSheet.getRange(2,13,rowCount,1).getValues();
  var lastNameInjured=sourceSheet.getRange(2,14,rowCount,1).getValues();

  var fullNameInjured=[]
  for(var i=0; i<rowCount; i++){
        fullNameInjured[i] = [firstNameInjured[i][0]+" "+lastNameInjured[i][0]];
    }

  var injuredDOB=sourceSheet.getRange(2,15,rowCount,1).getValues();

  var activityDuringInjury=sourceSheet.getRange(2,16,rowCount,1).getValues();

  var natureOfInjury=sourceSheet.getRange(2,17,rowCount,1).getValues();

  var bodyPartInjured=sourceSheet.getRange(2,18,rowCount,1).getValues();

  var howDidInjuryHappenWasFirstAid=sourceSheet.getRange(2,19,rowCount,2).getValues();

  var wasBatteryInvolved=sourceSheet.getRange(2,22,rowCount,1).getValues();

  var wasBatteryInvolvedIncident=sourceSheet.getRange(2,23,rowCount,1).getValues();

  var firstAidGiven=sourceSheet.getRange(2,21,rowCount,1).getValues();

  // Order didn't change of these columns so no need to split them up
  var equipmentInvolvedSuggestion=sourceSheet.getRange(2,24,rowCount,10).getValues();





// Copying over columns from source sheet to target sheet and putting them in the appropriate columns

  let timeStampRange=targetSheet.getRange(2,1,rowCount,1);
  timeStampRange.setValues(timestamp);



  let emailRange=targetSheet.getRange(2,2,rowCount,1);
  emailRange.setValues(email);

  let fullNameRange=targetSheet.getRange(2,3,rowCount,1);
  fullNameRange.setValues(fullName);

  let countryRange=targetSheet.getRange(2,4,rowCount,1);
  countryRange.setValues(country);

  let cityRange=targetSheet.getRange(2,5,rowCount,1);
  cityRange.setValues(city);

  let eventDate=targetSheet.getRange(2,6,rowCount,1);
  eventDate.setValues(date);

  let eventTime=targetSheet.getRange(2,7,rowCount,1);
  eventTime.setValues(time);

  let incidentDescriptionRange=targetSheet.getRange(2,8,rowCount,1);
  incidentDescriptionRange.setValues(incidentDescription);

  let incidentLocationRange=targetSheet.getRange(2,9,rowCount,1);
  incidentLocationRange.setValues(incidentLocation);

  let peopleInvolvedRange=targetSheet.getRange(2,10,rowCount,1);
  peopleInvolvedRange.setValues(peopleInvolved);

  let natureOfEventRange=targetSheet.getRange(2,11,rowCount,1);
  natureOfEventRange.setValues(typeOfEvent);

  let injuredOrIllRange=targetSheet.getRange(2,12,rowCount,1);
  injuredOrIllRange.setValues(injuredOrIll);

  let injuredNameRange=targetSheet.getRange(2,13,rowCount,1);
  injuredNameRange.setValues(fullNameInjured);

  let injuredDOBRange=targetSheet.getRange(2,14,rowCount,1);
  injuredDOBRange.setValues(injuredDOB);

  let activityRange=targetSheet.getRange(2,15,rowCount,1);
  activityRange.setValues(activityDuringInjury);

  let natureRange=targetSheet.getRange(2,16,rowCount,1);
  natureRange.setValues(natureOfInjury);

  let bodyPartRange=targetSheet.getRange(2,17,rowCount,1);
  bodyPartRange.setValues(bodyPartInjured);

  let howDidInjuryHappenWasFirstAidRange=targetSheet.getRange(2,18,rowCount,2);
  howDidInjuryHappenWasFirstAidRange.setValues(howDidInjuryHappenWasFirstAid);

  let firstAidGivenRange=targetSheet.getRange(2,20,rowCount,1);
  firstAidGivenRange.setValues(firstAidGiven);

  let wasBatteryInvolvedRange=targetSheet.getRange(2,21,rowCount,1);
  wasBatteryInvolvedRange.setValues(wasBatteryInvolved);

  let wasBatteryInvolvedIncidentRange=targetSheet.getRange(2,22,rowCount,1);
  wasBatteryInvolvedIncidentRange.setValues(wasBatteryInvolvedIncident);

// Columns that remained unchanged in order
  let equipmentInvolvedSuggestionRange=targetSheet.getRange(2,23,rowCount,10);
  equipmentInvolvedSuggestionRange.setValues(equipmentInvolvedSuggestion);




}
