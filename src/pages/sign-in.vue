<template>
  <div class="sign-in">
    <div class="sign-in__wrapper">
      <img src="@/assets/images/sign-log-in.png" class="sign-in__img">
      <div class="sign-in__bg-text">
        <h1 class="sign-in__title sign-in__text">Наша гора</h1>
        <p class="sign-in__enter sign-in__text">Вход</p>
      </div>
    </div>

    <div class="sign-in__content-wrapper">
      <UIButton :icon="TelegramIcon">
        Войти с Telegram
      </UIButton>

      <hr class="sign-in__line">
      
      <form action="" class="sign-in__email">
        <UIInput label="Логин / Эл. почта"/>
      </form>
      
      <form action="" class="sign-in__password">
        <UIInput label="Пароль"/>
      </form>

      <UIButton>
        Зарегистрироваться
      </UIButton>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'guest'
})

import TelegramIcon from '@/assets/images/telegram.svg'
</script>

<style lang="scss">
.sign-in {
  max-inline-size: 100%;
  inline-size: 600px;
  max-block-size: 100%;
  block-size: 671px;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  &__img {
    border-radius: 10px;
    filter: blur(1px) brightness(58%);
  }

  &__bg-text {
    position: absolute;
    z-index: 99;
    text-align: center;
    inset-block-start: 18.5%;
    inset-inline-start: 37%;
  }

  &__text {
    color: $white;
  }

  &__wrapper {
    position: relative;
  }

  &__title {
    font-weight: 600;
  }

  &__enter {
    font-size: 1.3rem;
    font-weight: 200;
  }

  &__line {
    inline-size: 129px;
    border: 1px solid $gray-400;
    margin: 35px auto;
  }

  &__content-wrapper {
    inline-size: 342px;
    max-inline-size: 100%;
    margin: 0 auto;
    padding-block-start: 45px;
  }
}
</style>
