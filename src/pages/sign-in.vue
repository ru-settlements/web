<template>
  <div class="sign-in">
    <div class="sign-in__header sign-in__overlay">
      <div class="sign-in__overlay">
        <h1
          class="sign-in__title
          sign-in__text">
          Наша гора
        </h1>

        <p
          class="sign-in__enter
          sign-in__text">
          Вход
        </p>
      </div>
    </div>

    <div class="sign-in__content-wrapper">
      <UIButton :icon="TelegramIcon">
        Войти с Telegram
      </UIButton>

      <hr class="sign-in__line">
      
      <form action="">
        <UIInput
          label="Логин / Эл. почта"
          class="sign-in__email"
        />

        <UIInput
          label="Пароль"
          class="sign-in__password"
          type="password"
        />

        <a
          href="#"
          class="sign-in__hint
          sign-in__hint_padding">
          Забыли пароль?
        </a>

        <UIButton type="submit">
          Зарегистрироваться
        </UIButton>

        <a
          href="#"
          class="sign-in__hint
          sign-in__entry">
          Вход
        </a>
      </form>
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
  inline-size: 600px;
  block-size: 671px;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  &__overlay {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  &__text {
    color: $white;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
  }

  &__header {
    background: url('@/assets/images/sign-log-in.png');
    inline-size: 600px;
    block-size: 107px;
    border-radius: 10px;
    background-size: cover;
    filter: brightness(95%);
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
    margin-block-start: 35px;
    margin-block-end: 35px;
    margin-inline-start: auto;
    margin-inline-end: auto;
  }

  &__content-wrapper {
    inline-size: 342px;
    max-inline-size: 100%;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: auto;
    margin-inline-end: auto;
    padding-block-start: 45px;
  }


  &__hint {
    color: $light-blue-400;
  }

  &__hint_padding {
    padding-block-end: 41px;
  }

  &__entry {
    display: flex;
    justify-content: center;
    padding-block-start: 10px;
  }
}
</style>
