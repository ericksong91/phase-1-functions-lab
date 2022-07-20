function distanceFromHqInBlocks(blocks){
    //return `You are ${(Math.abs(42 - blocks))} blocks away from HQ` 
    return Math.abs(42-blocks)
}

console.log(distanceFromHqInBlocks(40));

function distanceFromHqInFeet(blocks){
    return 264 * distanceFromHqInBlocks(blocks)

}

console.log(distanceFromHqInFeet(40))

function distanceTravelledInFeet(block1, block2){
    return Math.abs((block1 - block2) * 264)

}

console.log(distanceTravelledInFeet(54, 23))

function calculatesFarePrice(start, destination){
    let distanceFare = (Math.abs(start - destination) * 264);
    if(distanceFare < 400){
        return 0;
    } else if(distanceFare > 400, distanceFare < 2000){
        return (0.02 * (distanceFare - 400))
    } else if (distanceFare > 2000, distanceFare < 2500){
        return (25)
    } else {
        return 'cannot travel that far'
    }
    
}

console.log(calculatesFarePrice(1, 2));
console.log(calculatesFarePrice(7, 2));
console.log(calculatesFarePrice(50, 58));
console.log(calculatesFarePrice(70, 30));
