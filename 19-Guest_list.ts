let guest_list : string [] = ['Shahzaib','Amir','Hassan'];

// for(let i=0; i<guest_list.length; i++){


// console.log('Dear Mr.' +guest_list[i] + ' \n\nIt is our honour to invite you in our annual distribution ceremony 2024.\n\nThanks a million!\n\n')
// }

let absent_guest : string = 'shahzaib';
let new_guest : string = 'sufyan';

guest_list[0]= new_guest ;

// for(let i=0; i<guest_list.length; i++){
//  console.log('Dear Mr.' +guest_list[i] + ' \n\nIt is our honour to invite you in our annual distribution ceremony 2024.\n\nThanks a million!\n\n')
//     }
    
   //  console.log(`Mr. ${absent_guest} is not coming to the party.`)

   //  console.log('Good News! we find a big table so we are inviting 3 more guests.')
// we add three more guests in array.
guest_list.unshift('Haseeb');
guest_list.splice(2,0,'Hussain')
guest_list.push('Ubaid')
// for(let i=0; i<guest_list.length; i++){
//    console.log('Dear Mr.' +guest_list[i] + ' \n\nIt is our honour to invite you in our annual distribution ceremony 2024.\n\nThanks a million!\n\n')
//       }
// sorry for not inviting the guests for dinner.
      // console.log('\nSorry! we can not arange big table, only two people will be invited.');

      // we remove some guests from the list.
while(guest_list.length > 2){
   let remove_guest = guest_list.pop();
   // console.log(`Sorry Mr. ${remove_guest}, you are not invited for dinner.`);
}
// remaining two guests for inviting.
// for(let i=0; i<guest_list.length; i++){
//    console.log('Dear Mr.' +guest_list[i] + ' \n\nyou are still inivited in our annual distribution ceremony 2024.\n\nThanks a million!\n\n')
//       }
// i removed all guests from list.
      guest_list.splice(0,2);
      console.log(guest_list);

      //print a message indicating the number of people you are innviting.
      console.log(`Total number of guests are: ${guest_list.length}`);
      