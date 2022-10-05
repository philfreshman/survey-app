<script setup>
import { MaxRule, PeselRule } from '@/validation/CustomRules'
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

// const klauzula = 

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
          {{ stepName }}
        </li>
      </ul>
      <div class="form-body">


        <section v-show="activeStep === 'Personal Data'">
          <FormKit
              type="group"
              id="PersonalData"
              name="Personal Data"
          >
            <FormKit
                type="text"
                label="Imię"
                name="FirstName"
                autocomplete="off"
                value=""
                validation="required|length: 3"
                :validation-messages="{
                  required: 'Imię wymagane',
                  length: 'Minimum 3 znaki',
                }"
                validation-visibility="blur"
            />
            <FormKit
                type="text"
                label="Nazwisko"
                name="LastName"
                autocomplete="off"
                value=""
                validation="required|length: 3"
                :validation-messages="{
                  required: 'Nazwisko wymagane',
                  length: 'Minimum 3 znaki',
                }"
            />
            <FormKit
                type="text"
                label="Ulica / Miejscowość"
                name="StreetTown"
                autocomplete="off"
                value=""
                validation="required|length: 3"
                :validation-messages="{
              required: 'Nazwa ulicy / miejscowości wymagana',
              length: 'Minimum 3 znaki',
            }"
            />
            <FormKit
                type="text"
                label="Numer budynku"
                name="HouseNumber"
                autocomplete="off"
                value=""

                validation="required|length: 1"
                :validation-messages=" {
              required: 'Numer budynku wymagany',
              length: 'Minimum 1 znak',
            }"
            />
            <FormKit
                type="text"
                label="Numer lokalu"
                name="UnitNumber"
                autocomplete="off"
            />
            <FormKit
                type="text"
                name="PostalCode"
                label="Kod pocztowy"
                autocomplete="off"
                value=""
                :validation="[['required'], ['matches', /^(\d{2}-\d{3})|(\d{2}\d{3})$/]]"
                :validation-messages="{
                  required: 'Kod pocztowy jest wymagany',
                  matches: 'Kod pocztowy jest niepoprawny',
                }"
            />
            <FormKit
                type="text"
                label="Poczta"
                name="CityPost"
                autocomplete="off"
                value=""
                validation="required|length: 3"
                :validation-messages="{
                  required: 'Nazwa poczty jest wymagana',
                  length: 'Minimum 3 znaki',
                }"
            />
            <FormKit
                type="text"
                name="Pesel"
                label="Pesel"
                autocomplete="off"
                validation="required|(250)length: 11|(50)PeselRule"
                :validation-rules="{PeselRule}"
                :validation-messages="{
                  required: 'Pesel jest wymagany',
                  length: 'Pesel musi mieć 11 znaków',
                  PeselRule: 'Pesel niepoprawny'
                }"
                validation-visibility="blur"
                
            />

            <!-- Left // Right -->
            <div class="step-nav">
              <FormKit type="button" :disabled="true" v-text="'Powrót'" />
              <FormKit type="button" class="next" @click="setStep(1)" v-text="'Następne'"/>
            </div>

          </FormKit>
        </section>

        <section v-show="activeStep === 'Optionfgvrtf0o9'">
          <FormKit
              id="options"
              type="group"
              name="Option"
          >
            <FormKit
                id="Proposals"
                type="checkbox"
                label="Propozycje nazw rond"
                name="Proposals"
                value="0"
                validation="required|MaxRule"
                :validation-rules="{MaxRule}"
                :validation-messages="{
                  required:'Co najmniej jedna pozycja wymagana',
                  MaxRule: 'Maksymalnie 3 pozycje do wyboru'
                }"
                help="Maksymalnie 3 pozycje do wyboru."
                :options="[
                  {
                    value: '1',
                    label: 'Prezydenta RP Lecha Kaczyńskiego',
                  },
                  {
                    value: '2',
                    label: 'Redemptorystów',
                  },
                  {
                    value: '3',
                    label: 'Franciszka Solarza',
                  },
                  {
                    value: '4',
                    label: 'Na Klękanej Górce',
                  },
                  {
                    value: '5',
                    label: 'Nad Białą',
                  },
                  {
                    value: '6',
                    label: 'Lipowego Wzgórza',
                  },
                  {
                    value: '7',
                    label: 'Kapelmistrza Kazimierza Wrony'
                  },
                  {
                    value: '8',
                    label: 'Tuchowskich Lotników',
                  },
                  {
                    value: '9',
                    label: 'Batalionu Armii Krajowej „Barbara”',
                  },
                  {
                    value: '10',
                    label: 'Filareckiego Związku Elsów',
                    help: '&nbsp;'
                  },
                  {
                    value: '11',
                    label: 'Bez nazw',
                  },
                ]"
            />

            <!-- Left // Right -->
            <div class="step-nav">
              <FormKit type="button" @click="setStep(-1)" v-text="'Powrót'" />
              <FormKit type="button" class="next" :disabled="activeStep === 'regulamin'" @click="setStep(1)" v-text="'Następne'"/>
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
                label="Regulamin - Oświadczenie"
                name="TermsCheckbox"
                :options="['KLAUZULA INFORMACYJNA dot. przetwarzania danych osobowych w związku z prowadzeniem konsultacji społecznych dotyczących nadania nazw rondom w ciągu drogi wojewódzkiej nr 977 w Tuchowie przy ul. Adama Mickiewicza, Tarnowskiej i Ryglickiej Zgodnie z art. 13 ust. 1 i ust. 2 Rozporządzenia Parlamentu Europejskiego i Rady z dnia 27 kwietnia 2016r. o ochronie osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (dalej RODO) informujemy, iż: 1. Administratorem danych osobowych jest Burmistrz Tuchowa, adres 33-170 Tuchów ul. Rynek 1, tel. 14 6525218 w. 20, e-mail. um@tuchow.pl 2. Administrator wyznaczył Inspektora ochrony danych (dane IOD), z którym mogą się Państwo kontaktować w sprawach dotyczących przetwarzania Państwa danych osobowych w tym realizacji Państwa praw, w następujący sposób: 1) telefonicznie: 14 6525218 w. 56 2) e-mailem: um@tuchow.pl 3. Podstawy i cele przetwarzania: 1) art. 6 ust. 1 lit e RODO w związku ustawą z dnia 8 marca 1990 r. o samorządzie gminnym (Dz.U. z 2022 r., poz. 559, 583, 1005 i 1079) w celu wykonania zadania realizowanego w interesie publicznym oraz w ramach sprawowania władzy publicznej powierzonej Administratorowi jakim jest  przeprowadzenie  konsultacji  społecznych  dotyczących  nadania  nazw  rondom  w ciągu drogi wojewódzkiej  nr 977 w Tuchowie przy  ul. Adama Mickiewicza, Tarnowskiej       i Ryglickiej; 2) dane osobowe przetwarzane będą na podstawie art. 6 ust. 1 lit. c RODO oraz art. 9 ust. 2 lit.  g RODO tj. w celu  wypełniania  obowiązków prawnych  ciążących  na Administratorze oraz  ze względów związanych z ważnym interesem publicznym wynikającym z art. 18 pkt. 13 ustawy z dnia 8 marca 1990 r. o samorządzie gminnym (Dz.U. z 2022 r., poz. 559, 583, 1005 i 1079) 3) dane osobowe w postaci numeru telefonu oraz adresu e-mail, który może Pani/Pan podać dobrowolnie będą przetwarzane na podstawie art. 6 ust. 1 lit. a RODO tj. w oparciu o udzieloną zgodę. 4. Pani / Pana dane będą przetwarzane w celu przeprowadzenie konsultacji społecznych dotyczących nadania nazw rondom w ciągu drogi wojewódzkiej nr 977 w Tuchowie przy ul. Adama Mickiewicza, Tarnowskiej i Ryglickiej. Dane osobowe w postaci nr telefonu będą przetwarzane na podstawie Pani/Pana zgody (art. 6 ust. 1 lit a RODO) w celu ułatwienia kontaktu w przypadku konieczności uzupełnienia złożonego przez Panią/Pana formularza zgłoszenia. 5. Pani/Pana dane osobowe będą przetwarzane na podstawie przepisów prawa, przez okres niezbędny do realizacji celów przetwarzania, lecz nie krócej niż okres wskazany w przepisach o archiwizacji (5 lat od   dnia   wykonania   ostatniej   czynności   związanej   z   konsultacjami   społecznymi),   natomiast w odniesieniu do danych osobowych przetwarzanych w oparciu o udzieloną zgodę nie dłużej niż do czasu cofnięcia zgody. 6. Dostęp do Pani/Pana danych osobowych mogą posiadać podmioty, realizujące dla administratora usługi informatyczne, serwisowe, prawne np. podmioty dostarczające oprogramowanie, podmioty świadczące obsługę prawną. Oprócz tego Pani/Pana dane osobowe mogą zostać przekazane innym podmiotom wyłącznie na podstawie przepisów prawa np. służbom, organom administracji oraz innym podmiotom, jeżeli wykażą interes prawny. 7. W związku z przetwarzaniem danych osobowych przez Administratora ma Pani/Pan prawo do: 1) dostępu do treści danych na podstawie art. 15 RODO; 2) sprostowania danych na podstawie art. 16 RODO; 3) usunięcia danych na podstawie art. 17 RODO jeżeli: a) wycofa Pani/Pan zgodę na przetwarzanie danych osobowych;   b) dane osobowe przestaną być niezbędne do celów, w których zostały zebrane lub w których były przetwarzane; c) dane są przetwarzane niezgodnie z prawem; 4) ograniczenia przetwarzania danych na podstawie art. 18 RODO jeżeli: a) osoba, której dane dotyczą, kwestionuje prawidłowość danych osobowych; b) przetwarzanie jest niezgodne z prawem, a osoba, której dane dotyczą, sprzeciwia się usunięciu danych osobowych, żądając w zamian ograniczenia ich wykorzystywania; c) Administrator nie potrzebuje już danych osobowych do celów przetwarzania, ale są one potrzebne osobie, której dane dotyczą, do ustalenia, dochodzenia lub obrony roszczeń; d) osoba, której dane dotyczą, wniosła sprzeciw wobec przetwarzania – do czasu stwierdzenia, czy prawnie uzasadnione podstawy po stronie administratora są nadrzędne wobec podstaw sprzeciwu osoby, której dane dotyczą; e) wystąpienie z żądaniem ograniczenia przetwarzania nie wpływa na tok i przebieg postępowania. 5) wniesienia sprzeciwu wobec przetwarzania danych na podstawie art. 21 RODO, wobec przetwarzania danych osobowych opartego na art. 6 ust. 1 lit. e RODO; 6) cofnięcia zgody w dowolnym momencie. Cofnięcie zgody nie wpływa na przetwarzanie danych dokonywane przez administratora przed jej cofnięciem. 8. Podanie Pani/Pana danych: 1) jest wymogiem ustawy na podstawie, której działa administrator. Jeżeli odmówi Pani/Pan podania danych lub poda nieprawidłowe dane, Administrator nie będzie mógł zrealizować celu do jakiego zobowiązują go przepisy prawa, 2) jest warunkiem przyjęcia zgłoszenia propozycji nadania nazwy ronda. Jeżeli nie poda Pani/Pan nam swoich danych osobowych nie będziemy mogli przyjąć Pani/Pana propozycji, 3) jest dobrowolne i odbywa się na podstawie Pani/Pana zgody, która może być cofnięta w dowolnym momencie. 9. Przysługuje Pani/Panu także skarga do organu do organu nadzorczego - Prezesa Urzędu Ochrony Danych Osobowych, gdy uznasz, iż przetwarzanie Pani/Pana danych osobowych narusza przepisy ogólnego rozporządzenia o ochronie danych osobowych. 10. Pani/Pana dane nie będą przetwarzane w sposób zautomatyzowany, w tym również w formie profilowania. 11. Administrator nie przekazuje danych osobowych do państwa trzeciego lub organizacji międzynarodowych. Oświadczam, że zapoznałem się z treścią niniejszej klauzuli informacyjnej, akceptuje ją bez zastrzeżeń oraz wyrażam zgodę na przetwarzanie moich danych osobowych w zakresie określonym w Regulaminie konsultacji społecznych dotyczących nadania nazw rondom w ciągu drogi wojewódzkiej nr 977 w Tuchowie przy ul. Adama Mickiewicza, Tarnowskiej i Ryglickiej zgodnie z Rozporządzenia Parlamentu Europejskiego i Rady z dnia 27 kwietnia 2016r. o ochronie osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE oraz ustawą z dnia 10 maja 2018 r. o ochronie danych osobowych (Dz.U. z 2018 r., poz. 1000 oraz Dz.U. z 2019 r., poz. 1781) Administratorem danych osobowych jest Burmistrz Tuchowa, ul. Rynek 1, 33-170 Tuchów, tel. 14 6525218 w. 56, e-mail: um@tuchow.pl.']"
                validation="required"
                :validation-messages="{
                  required: 'Zgoda jest wymagana'
                }"
            />


            <!-- Left // Right -->
            <div class="step-nav">
              <FormKit type="button" @click="setStep(-1)" v-text="'Powrót'" />
              <FormKit type="submit" label="Wyślij głos" :disabled="!valid" />
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

