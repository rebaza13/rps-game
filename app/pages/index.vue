<template>
   <div class="flex flex-col items-center justify-center pt-10 min-h-screen w-full">
    
    <h1 class="text-4xl text-center font-bold uppercase text-white drop-shadow-lg">Game</h1>
    
    <div class="hands text-white flex items-center justify-center gap-8 mt-10">
        <div class="player-hand text-center">
            <p class="text-sm opacity-80">Player</p>
            <p class="text-2xl font-bold">{{ playerChoice || 'Choose' }}</p>
        </div>
        
        <div class="dot w-3 h-3 bg-white rounded-full animate-pulse"></div>
        
        <div class="computer-hand text-center">
            <p class="text-sm opacity-80">Computer</p>
            <p class="text-2xl font-bold">{{ computerChoice || 'Waiting...' }}</p>
        </div>
    </div>

    <div class="score flex justify-center gap-10 mt-12 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full text-white border border-white/20">
        <p>User: <span class="font-bold text-green-400">{{ yourScore }}</span></p>
        <p>CPU: <span class="font-bold text-red-400">{{ computerScore }}</span></p>
    </div>

    <div class="choices flex justify-center gap-6 mt-12">
        <button class="animate choice-btn bg-white/10 backdrop-blur-md rounded-full px-6 py-3 text-white border border-white/20 hover:bg-white/20 transition" @click="handlePlay('rock')">Rock</button>
        <button class="choice-btn bg-white/10 backdrop-blur-md rounded-full px-6 py-3 text-white border border-white/20 hover:bg-white/20 transition" @click="handlePlay('paper')">Paper</button>
        <button class="choice-btn bg-white/10 backdrop-blur-md rounded-full px-6 py-3 text-white border border-white/20 hover:bg-white/20 transition" @click="handlePlay('scissors')">Scissors</button>
   </div>
   <div class="result text-white font-mono text-lg">{{ result || 'Make your choice!' }}</div>

   </div>

</template>

<script setup lang="ts">
const { yourScore, computerScore, playerChoice, computerChoice, result, playGame } = useGame();
import type { game } from '../composables/index';

const handlePlay = (playerChoice: game) => {
  playGame(playerChoice);
};
</script>