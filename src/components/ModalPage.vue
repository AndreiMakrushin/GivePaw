<script setup>
import { useAnimalStore } from '../stores/animalStore';
const animals = useAnimalStore()
const closeModal = () =>{
    animals.openModal = false
}
</script>
<template>
  <div>
    <div class="modal-container">
      <div class="modal">
        <div class="header">
            <h3>Напишите нам</h3>
            <div class="inputs">
                <textarea name="message" id="" cols="30" rows="10" placeholder="Сообщение"></textarea>
            </div>
            <div class="name-email">
                <input type="text" placeholder="Веедите ваше имя">
                <input type="text" placeholder="Email">
            </div>
            <div class="theme">
                <input type="text" placeholder="Введите тему">
            </div>
        </div>
        <button @click="closeModal">Отмена</button>
        <button @click="closeModal">Отправить</button>
      </div>
    </div>
  </div>
</template>
<style scoped>
    .modal-container{
        z-index: 99999;
        position: fixed;
        background: rgba(179, 179, 179, 0.3);
        height: 100vh;
        width: 100vw;
        display: flex;
        align-items: center;
    }
    .modal{
        margin: 0 auto;
    }
</style>
