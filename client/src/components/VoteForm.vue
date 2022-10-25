<script setup>
import { switchName, termsOfUse, FormatFormData } from '../services/formkit/utils.js'
import { Max3 } from '../validation/CustomRules'
import useSteps from '../services/formkit/useSteps'
import * as Notify  from "../plugins/sweetalert.js"
import Api from "../plugins/axios";

const { steps, visitedSteps, activeStep, setStep, stepPlugin } = useSteps()

const submitApp = async (formData, node) => {
  formData = FormatFormData(formData)
  let result;
  try {
    result = await Api.PostVote(formData)
    Notify.ShowPopUp(result.status)
  } catch (err) {
    Notify.ShowPopUp(null)
  }
  setInterval(() => {window.location.replace("/")}, 2600);
}


const checkStepValidity = (stepName) => {
  return (steps[stepName].errorCount > 0
      || steps[stepName].blockingCount > 0)
      && visitedSteps.value.includes(stepName)
}



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
                validation="required|Max3"
                decorator-icon="heart"
                :validation-rules="{Max3}"
                :validation-messages="{
                  required:'At least one checkbox required',
                  Max3: 'Maximum 3 choices'
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
                label="Position"
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
                label="Experience"
                placeholder="Years of experience"
                name="Experience"
                :options="[
                  '< 1',
                  '1 - 2',
                  '2 - 5',
                  '5 - 10',
                  '10 +',
                ]"
                validation="required"
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
                class="hahaha"
                id="TermsOfUse"
                type="checkbox"
                label="Terms of use"
                name="TermsCheckbox"
                :options="[termsOfUse]"
                validation="required"

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

<script>

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



</script>