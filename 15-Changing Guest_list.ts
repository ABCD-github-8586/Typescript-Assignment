let guest_list : string [] = ['Shahzaib','Amir','Hassan'];

for(let i=0; i<guest_list.length; i++){


console.log('Dear Mr.' +guest_list[i] + ' \n\nIt is our honour to invite you in our annual distribution ceremony 2024.\n\nThanks a million!\n\n')
}

let absent_guest : string = 'shahzaib';
let new_guest : string = 'sufyan';

guest_list[0]= new_guest ;

for(let i=0; i<guest_list.length; i++){
 console.log('Dear Mr.' +guest_list[i] + ' \n\nIt is our honour to invite you in our annual distribution ceremony 2024.\n\nThanks a million!\n\n')
    }
    
    console.log(`Mr. ${absent_guest} is not coming to the party.`)
