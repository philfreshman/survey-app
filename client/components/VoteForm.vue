<script setup>
import { switchName, termsOfUse, FormatFormData } from '~/plugins/formkit/utils'
import useSteps from '../plugins/formkit/useSteps'
import Api from "../tools/axios";
import {ShowPopUp} from "../tools/sweetalert";

const { steps, visitedSteps, activeStep, setStep, stepPlugin } = useSteps()

const submitApp = async (formData, node) => {
  formData = FormatFormData(formData)
  try {
    // no api request for demo purpose
    // const result = await Api.PostVote(formData)
    ShowPopUp(200)
  } catch (err) {
    // ShowPopUp(0)
  }
}

const checkStepValidity = (stepName) => {
  return (steps[stepName].errorCount > 0
      || steps[stepName].blockingCount > 0)
      && visitedSteps.value.includes(stepName)
}

onMounted(() => {
  setTimeout(setupCheckBoxes, 1000);
  function setupCheckBoxes() {
    let shouldGoFurther = true;
    const noNameCheckbox = document.getElementById("Options-option-11")
    const proposals = document.querySelectorAll('input[type="checkbox"]')
    const propArray = Array.from(proposals).slice(0,11)

    // unclick array
    if (noNameCheckbox !== undefined && noNameCheckbox !== null){
      noNameCheckbox.addEventListener('change', () => {
        if(!shouldGoFurther) return;
        for (let element of propArray) {
          if(element.checked) element.click()
        }
      })
    }
    // unclick noName
    if(proposals !== undefined && propArray !== undefined){
      for (let element of propArray) {
        element.addEventListener("click", () => {
          if(!element.checked || !noNameCheckbox.checked) return;
          shouldGoFurther = false;
          noNameCheckbox.click();
          shouldGoFurther = true;
        })
      }
    }
  }
})

</script>


<template>
  <div class="form">
    <FormKit
        type="form"
        #default="{ state: { valid } }"
        :plugins="[stepPlugin]"
        @submit="submitApp"
        :actions="false"
        id="myForm"
    >
      <ul class="steps">
        <li
            v-for="(step, stepName) in steps"
            :key="['step', { 'has-errors': checkStepValidity(stepName) }]"
            :class="['step', { 'has-errors': checkStepValidity(stepName) }]"
            @click="activeStep = stepName"
            :data-step-valid="step.valid && step.errorCount === 0"
            :data-step-active="activeStep === stepName"
        >
      <span
          v-if="checkStepValidity(stepName)"
          class="step--errors"
          v-text="step.errorCount + step.blockingCount"
      />
          {{ switchName(stepName) }}
        </li>
      </ul>
      <div class="form-body">

        <section v-show="activeStep === 'CheckBoxes'">
          <FormKit
              id="CheckBoxes"
              type="group"
              name="CheckBoxes"
          >

            <FormKit
                id="Options"
                type="checkbox"
                label="Programming languages"
                name="Options"
                validation="required|max:3"
                decorator-icon="heart"
                :validation-messages="{
                  required:'At least one checkbox required',
                  max: 'Maximum 3 choices'
                }"
                help="Maximum 3 choices"
                :options="[
                  {
                    value: '1',
                    label: 'Go',
                  },
                  {
                    value: '2',
                    label: 'C#',
                  },
                  {
                    value: '3',
                    label: 'JavaScript',
                  },
                  {
                    value: '4',
                    label: 'Phyton',
                  },
                  {
                    value: '5',
                    label: 'Java',
                  },
                  {
                    value: '6',
                    label: 'Rust',
                  },
                  {
                    value: '7',
                    label: 'Kotlin'
                  },
                  {
                    value: '8',
                    label: 'PHP',
                  },
                  {
                    value: '9',
                    label: 'TypeScript',
                  },
                  {
                    value: '10',
                    label: 'C / C++',
                    help: '&nbsp;'
                  },
                  {
                    value: '11',
                    label: 'None of the above',
                  },
                ]"
            />

            <!-- Back // Next -->
            <div class="step-nav">
              <FormKit type="button" :disabled="true" v-text="'Back'" />
              <FormKit type="button" class="next" @click="setStep(1)" v-text="'Next'"/>
            </div>

          </FormKit>
        </section>

        <section v-show="activeStep === 'Data'">

          <FormKit
              type="group"
              id="Data"
              name="Data"
          >

            <FormKit
                type="select"
                label="*Position"
                placeholder="Current position"
                name="Position"
                :options="[
                  'Frontend developer',
                  'Backend developer',
                  'Fullstack developer',
                  'Other',
                ]"
                validation="required"
            />

            <FormKit
                type="select"
                label="*Experience"
                placeholder="Years of experience"
                name="Experience"
                validation="required"
                :options="[
                  '< 1',
                  '1 - 2',
                  '2 - 5',
                  '5 - 10',
                  '10 +',
                ]"
            />

            <FormKit
                type="url"
                label="Your website / GitHub"
                name="Url"
                placeholder="https://www.github.com/..."
                validation="url"
            />

            <FormKit
                type="textarea"
                label="Your feedback"
                name="Feedback"
                rows="6"
                placeholder="Things I should add..."
                help="Hope you liked it!"
            />


            <!-- Left // Right -->
            <div class="step-nav">
              <FormKit type="button" @click="setStep(-1)" v-text="'Back'" />
              <FormKit type="button" class="next" :disabled="activeStep === 'regulamin'" @click="setStep(1)" v-text="'Next'"/>
            </div>

          </FormKit>
        </section>

        <section v-show="activeStep === 'TermsOfUse'">
            <FormKit
                id="TermsOfUse"
                type="group"
                name="TermsOfUse"
            >
            <FormKit
                id="TermsOfUse"
                type="checkbox"
                label="Terms of use"
                name="TermsCheckbox"
                validation="required"
                :options="[termsOfUse]"

            />

            <!-- Left // Right -->
            <div class="step-nav">
              <FormKit type="button" @click="setStep(-1)" v-text="'Back'" />
              <FormKit type="submit" label="Send" :disabled="!valid" />
            </div>

          </FormKit>
        </section>

      </div>
    </FormKit>

  </div>

</template>