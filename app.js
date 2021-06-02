function getRandomValue(min, max) {
  return Math.floor(random() * (max - min) + min);
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100
    }
  },
  methods: {
    attackMonster() {
      // Attacks need to be a random number at least 5 points to maximum 12 points
      const attackValue = getRandomValue(12, 5);
      this.monsterHealth -= attackValue;
      this.attackPlayer();
    },
    // Monster attack at least 8 points to maximum 15 points
    attackPlayer() {
      const attackValue = getRandomValue(15, 8);
      this.playerHealth -= attackValue;
    },
  }
})

app.mount('#game');