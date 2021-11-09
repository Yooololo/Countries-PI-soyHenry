const { Country, Activity } = require("../db");

const country_activity = async () => {
  try {
    
    const ARG = await Country.findOne({ where: { name: "Argentina" } });
    const USA = await Country.findOne({ where: { id: "USA" } });
    const CHN = await Country.findOne({ where: { id: "CHN" } });
    const RUS = await Country.findOne({ where: { id: "RUS" } });
    const BRA = await Country.findOne({ where: { id: "BRA" } });
    const CAN = await Country.findOne({ where: { id: "CAN" } });
    const MEX = await Country.findOne({ where: { id: "MEX" } });
    const IND = await Country.findOne({ where: { id: "IND" } });
    const AUS = await Country.findOne({ where: { id: "AUS" } });
    const ZAF = await Country.findOne({ where: { id: "ZAF" } });
    const NLD = await Country.findOne({ where: { id: "NLD" } });
    const FRA = await Country.findOne({ where: { id: "FRA" } });
    const DEU = await Country.findOne({ where: { id: "DEU" } });
    const ESP = await Country.findOne({ where: { id: "ESP" } });

    const Rafting = await Activity.create({
        activityname: "Rafting",
        difficulty: "4",
        duration: "8 hs",
        season: "Spring",
    });
    const Snowboarding = await Activity.create({
        activityname: "Snowboarding",
        difficulty: "2",
        duration: "4 hs",
        season: "Winter",
    });
    const Skiing = await Activity.create({
        activityname: "Skiing",
        difficulty: "2",
        duration: "4 hs",
        season: "Winter",
    });
    const Trailing = await Activity.create({
        activityname: "Trailing",
        difficulty: "3",
        duration: "8 hs",
        season: "Spring",
    });
    const Karting = await Activity.create({
        activityname: "Karting",
        difficulty: "1",
        duration: "1 hs",
        season: "Autumn",
    });
    const Bobsleigh_riding = await Activity.create({
        activityname: "Bobsleigh riding",
        difficulty: "2",
        duration: "4 hs",
        season: "Winter",
    });
    const Slacklining = await Activity.create({
        activityname: "Slacklining",
        difficulty: "3",
        duration: "2 hs",
        season: "Summer",
    });
    const Rock_Climbing = await Activity.create({
        activityname: "Rock Climbing",
        difficulty: "5",
        duration: "8 hs",
        season: "Spring",
    });
    const Bungee_Jumping = await Activity.create({
        activityname: "Bungee Jumping",
        difficulty: "1",
        duration: "4 hs",
        season: "Summer",
    });
    const Skydiving = await Activity.create({
        activityname: "Skydiving",
        difficulty: "2",
        duration: "4 hs",
        season: "Summer",
    });
    const Diving = await Activity.create({
        activityname: "Diving",
        difficulty: "4",
        duration: "12 hs",
        season: "Summer",
    });
    const Zero_gravity_flight = await Activity.create({
        activityname: "Zero gravity flight",
        difficulty: "5",
        duration: "8 hs",
        season: "Autumn",
    });
    const Cliff_jumping = await Activity.create({
        activityname: "Cliff jumping",
        difficulty: "3",
        duration: "6 hs",
        season: "Spring",
    });
    const Ice_swimming = await Activity.create({
        activityname: "Ice swimming",
        difficulty: "5",
        duration: "8 hs",
        season: "Winter",
    });
    const Rodeo = await Activity.create({
        activityname: "Rodeo",
        difficulty: "4",
        duration: "4 hs",
        season: "Spring",
    });
    const Amusement_Park = await Activity.create({
        activityname: "Amusement Park",
        difficulty: "1",
        duration: "12 hs",
        season: "Spring",
    });
    const Gliding = await Activity.create({
        activityname: "Gliding",
        difficulty: "2",
        duration: "6 hs",
        season: "Summer",
    });
    const Surfing = await Activity.create({
        activityname: "Surfing",
        difficulty: "3",
        duration: "2 hs",
        season: "Summer",
    });
    const Formula_1_Driving = await Activity.create({
        activityname: "Formula 1 Driving",
        difficulty: "5",
        duration: "4 hs",
        season: "Autumn",
    });

    Rafting.addCountries(ARG)
    Rafting.addCountries(USA)
    Rafting.addCountries(DEU)
    Rafting.addCountries(ESP)
    Snowboarding.addCountries(ARG)
    Snowboarding.addCountries(USA)
    Snowboarding.addCountries(RUS)
    Snowboarding.addCountries(CAN)
    Snowboarding.addCountries(AUS)
    Snowboarding.addCountries(FRA)
    Snowboarding.addCountries(DEU)
    Snowboarding.addCountries(ESP)
    Skiing.addCountries(ARG)
    Skiing.addCountries(USA)
    Skiing.addCountries(RUS)
    Skiing.addCountries(CAN)
    Skiing.addCountries(AUS)
    Skiing.addCountries(FRA)
    Skiing.addCountries(DEU)
    Skiing.addCountries(ESP)
    Trailing.addCountries(BRA)
    Trailing.addCountries(CHN)
    Trailing.addCountries(RUS)
    Trailing.addCountries(IND)
    Trailing.addCountries(AUS)
    Trailing.addCountries(DEU)
    Karting.addCountries(CHN)
    Karting.addCountries(RUS)
    Karting.addCountries(CAN)
    Karting.addCountries(MEX)
    Karting.addCountries(IND)
    Karting.addCountries(NLD)
    Karting.addCountries(FRA)
    Bobsleigh_riding.addCountries(USA)
    Bobsleigh_riding.addCountries(CHN)
    Bobsleigh_riding.addCountries(RUS)
    Bobsleigh_riding.addCountries(CAN)
    Bobsleigh_riding.addCountries(FRA)
    Bobsleigh_riding.addCountries(DEU)
    Bobsleigh_riding.addCountries(ESP)
    Slacklining.addCountries(USA)
    Slacklining.addCountries(CHN)
    Slacklining.addCountries(RUS)
    Slacklining.addCountries(CAN)
    Slacklining.addCountries(FRA)
    Slacklining.addCountries(DEU)
    Rock_Climbing.addCountries(ARG)
    Rock_Climbing.addCountries(USA)
    Rock_Climbing.addCountries(RUS)
    Rock_Climbing.addCountries(CAN)
    Rock_Climbing.addCountries(AUS)
    Rock_Climbing.addCountries(FRA)
    Rock_Climbing.addCountries(DEU)
    Rock_Climbing.addCountries(BRA)
    Rock_Climbing.addCountries(CHN)
    Rock_Climbing.addCountries(IND)
    Rock_Climbing.addCountries(NLD)
    Rock_Climbing.addCountries(ESP)
    Bungee_Jumping.addCountries(USA)
    Bungee_Jumping.addCountries(ARG)
    Bungee_Jumping.addCountries(BRA)
    Bungee_Jumping.addCountries(CAN)
    Bungee_Jumping.addCountries(MEX)
    Bungee_Jumping.addCountries(IND)
    Bungee_Jumping.addCountries(ESP)
    Skydiving.addCountries(ARG)
    Skydiving.addCountries(USA)
    Skydiving.addCountries(BRA)
    Skydiving.addCountries(CHN)
    Skydiving.addCountries(RUS)
    Skydiving.addCountries(CAN)
    Skydiving.addCountries(MEX)
    Skydiving.addCountries(IND)
    Skydiving.addCountries(AUS)
    Skydiving.addCountries(ZAF)
    Skydiving.addCountries(NLD)
    Skydiving.addCountries(FRA)
    Skydiving.addCountries(DEU)
    Skydiving.addCountries(ESP)
    Diving.addCountries(ARG)
    Diving.addCountries(USA)
    Diving.addCountries(BRA)
    Diving.addCountries(CHN)
    Diving.addCountries(RUS)
    Diving.addCountries(CAN)
    Diving.addCountries(MEX)
    Diving.addCountries(IND)
    Diving.addCountries(AUS)
    Diving.addCountries(ZAF)
    Diving.addCountries(NLD)
    Diving.addCountries(FRA)
    Diving.addCountries(DEU)
    Diving.addCountries(ESP)
    Zero_gravity_flight.addCountries(USA)
    Zero_gravity_flight.addCountries(CHN)
    Zero_gravity_flight.addCountries(RUS)
    Cliff_jumping.addCountries(USA)
    Cliff_jumping.addCountries(BRA)
    Cliff_jumping.addCountries(CHN)
    Cliff_jumping.addCountries(CAN)
    Cliff_jumping.addCountries(IND)
    Cliff_jumping.addCountries(AUS)
    Ice_swimming.addCountries(USA)
    Ice_swimming.addCountries(RUS)
    Ice_swimming.addCountries(CAN)
    Ice_swimming.addCountries(FRA)
    Rodeo.addCountries(USA)
    Amusement_Park.addCountries(ARG)
    Amusement_Park.addCountries(USA)
    Amusement_Park.addCountries(BRA)
    Amusement_Park.addCountries(CHN)
    Amusement_Park.addCountries(RUS)
    Amusement_Park.addCountries(CAN)
    Amusement_Park.addCountries(MEX)
    Amusement_Park.addCountries(IND)
    Amusement_Park.addCountries(AUS)
    Amusement_Park.addCountries(ZAF)
    Amusement_Park.addCountries(NLD)
    Amusement_Park.addCountries(FRA)
    Amusement_Park.addCountries(DEU)
    Amusement_Park.addCountries(ESP)
    Gliding.addCountries(RUS)
    Gliding.addCountries(CAN)
    Surfing.addCountries(ARG)
    Surfing.addCountries(USA)
    Surfing.addCountries(BRA)
    Surfing.addCountries(CHN)
    Surfing.addCountries(RUS)
    Surfing.addCountries(CAN)
    Surfing.addCountries(MEX)
    Surfing.addCountries(IND)
    Formula_1_Driving.addCountries(USA)
    Formula_1_Driving.addCountries(BRA)
    Formula_1_Driving.addCountries(CHN)
    Formula_1_Driving.addCountries(RUS)
    Formula_1_Driving.addCountries(CAN)
    Formula_1_Driving.addCountries(FRA)
    Formula_1_Driving.addCountries(DEU)
    Formula_1_Driving.addCountries(ESP)

    
} catch (e) {}
}
module.exports = country_activity;