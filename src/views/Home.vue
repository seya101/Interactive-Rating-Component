<template>
    <div class="p-6 max-w-sm bg-[#1f2630] rounded-3xl shadow-md text-left">
    <!-- SVG Icon -->
    <div class="bg-[#262e38] rounded-full p-3 w-fit mb-7" >
      <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg"><path d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z" fill="#FC7614"/></svg>
    </div>

      <!-- Text Content -->
      <h5 class="mb-2 text-2xl tracking-tight text-white">
        How did we do?
      </h5>
      <p class="mb-10 font-normal text-gray-400">
        Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
      </p>

      <!-- Rating Button -->
      <div 
        class="flex justify-between text-white my-7 mb-10 text-gray-400"
      >
        <div  
          v-for="({ value }, index) in items"
          @click="setActive(index)"
          :key="index"
        >
          <span 
            class="bg-[#262e38] rounded-full p-4 px-5 w-full text-center hover:bg-orange-500 hover:text-white font-bold focus: cursor-pointer"
            :class="{'bg-gray-400 text-white': active === index}"
          >
          {{ value }}
          </span>
        </div>
      </div>
      <!-- Submit Button -->
      <router-link to="/SubmitForm" >
        <button  class="bg-orange-500 text-white font-bold hover:bg-white hover:text-orange-500 w-full rounded-full tracking-wide">SUMBIT</button> 
      </router-link> 
    </div>
</template>

<script setup>
  import {ref} from "vue";

  
  
  const active = ref(null);
  console.log(active, active.value);

  const setActive = (index) => {
    active.value = index;
    console.log('Select ' + index) 
  } 

    const items = [
        {value: "1"},
        {value: "2"},
        {value: "3"},
        {value: "4"},
        {value: "5"}
    ]

</script>