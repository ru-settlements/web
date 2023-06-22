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
      <UIButton :icon="TelegramIcon" disabled>
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
          type="password">

          <template #hint>
            <a href="#">
              Забыли пароль?
            </a>
          </template>
        </UIInput>

        <UIButton
          type="submit"
          sub-link="#"
          sub-link-label="Войти"
          class="sign-in__submit-btn">
          Зарегистрироваться
        </UIButton>
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
  border-radius: 10px;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: auto;
  margin-inline-end: auto;
  padding-block-end: 50px;
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

  &__submit-btn {
    margin-block-start: 20px;
  }
}
</style>
