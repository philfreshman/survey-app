<script setup>
import { switchName, termsOfUse } from '@/services/formkit/utils'
import { Max3, Max6 } from '@/validation/CustomRules'
import useSteps from '@/services/formkit/useSteps'
import * as Notify  from "@/plugins/SweetAlert"
import Api from "@/plugins/axios";

const { steps, visitedSteps, activeStep, setStep, stepPlugin } = useSteps()

const submitApp = async (formData, node) => {
  let result;
  try {
    result = await Api.PostVote(formData)
    Notify.ShowPopUp(result.data.statusCode)
    node.clearErrors()
  } catch (err) {
    Notify.ShowPopUp(0)
    node.setErrors(err.formErrors, err.fieldErrors)
  }
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


        <section v-show="activeStep === 'PersonalData'">
          <FormKit
              type="group"
              id="PersonalData"
              name="PersonalData"
          >
            <FormKit
                type="text"
                label="First name"
                name="FirstName"
                autocomplete="off"
                value="testName"
                validation="required|length: 3"
                :validation-messages="{
                  required: 'First name required',
                  length: '3 characters minimum',
                }"
                validation-visibility="blur"
            />
            <FormKit
                type="text"
                label="Last name"
                name="LastName"
                autocomplete="off"
                value="testLastname"
                validation="required|length: 3"
                :validation-messages="{
                  required: 'Last name required',
                  length: '3 characters minimum',
                }"
            />
            <FormKit
                type="text"
                label="Street"
                name="Street"
                autocomplete="off"
                value="testStreet"
                validation="required|length: 3"
                :validation-messages="{
                  required: 'Street required',
                  length: '3 characters minimum',
            }"
            />
            <FormKit
                type="text"
                label="House number"
                name="HouseNumber"
                autocomplete="off"
                value="testHouseNummber"
                validation="required|length: 1"
                :validation-messages=" {
                  required: 'House number required',
                  length: '1 character minimum',
            }"
            />
            <FormKit
                type="text"
                label="Unit number"
                name="UnitNumber"
                value="0"
                autocomplete="off"
            />
            <FormKit
                type="text"
                name="PostalCode"
                label="Postal code"
                autocomplete="off"
                value="10-823"
                validation="required|Max6"
                :validation-rules="{Max6}"
                :validation-messages="{
                  required: 'Postal code required',
                  Max6: '6 characters maximum'
                }"
            />
            <FormKit
                type="text"
                label="City"
                name="City"
                autocomplete="off"
                value="Berlin"
                validation="required|length: 3"
                :validation-messages="{
                  required: 'City required',
                  length: '3 characters minimum',
                }"
            />

            <!-- Left // Right -->
            <div class="step-nav">
              <FormKit type="button" :disabled="true" v-text="'Back'" />
              <FormKit type="button" class="next" @click="setStep(1)" v-text="'Next'"/>
            </div>

          </FormKit>
        </section>

        <section v-show="activeStep === 'CheckBoxes'">
          <FormKit
              id="CheckBoxes"
              type="group"
              name="CheckBoxes"
          >
            <FormKit
                id="Proposals"
                type="checkbox"
                label="Programming languages"
                name="Proposals"
                validation="required|Max3"
                decorator-icon="happy"
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
                    label: 'JavaScript',
                  },
                  {
                    value: '3',
                    label: 'C#',
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
                :validation-messages="{
                  required: 'Agreement required'
                }"
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
  const noNameCheckbox = document.getElementById("Proposals-option-11")
  const proposals = document.querySelectorAll('input[type="checkbox"]')
  const propArray = Array.from(proposals).slice(0,10)
  
  // unclick array
  if (noNameCheckbox !== undefined){
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

export default {
  name: "VoteForm"
}
</script>

