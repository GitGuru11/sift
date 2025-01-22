import React, { useState, useEffect } from 'react';

const marketoScriptId = '';

export default function MarketoForm({ formId, formData, onSubmit }) {
	const [isLoaded, setIsLoaded] = useState(false);
	var submitBtn;
	var submitState = false;
	var initialSetup = false;
	useEffect(() => {
		if (!document.getElementById(marketoScriptId)) {
			loadScript();
		} else {
			setIsLoaded(true);
		}
	}, []);

	useEffect(() => {
		if (isLoaded && window.MktoForms2) {
			window.MktoForms2.loadForm(
				'//pages.sift.com',
				'526-PCC-974',
				formId,
				(form) => {
					formHandler(form);
				},
			);
		}
	}, [isLoaded, formId]);

	if (isLoaded) {
		setTimeout(() => {
			setUpSubmitButton();
		}, 1500);
	}

    function checkSubmitStatus() {
      if(submitBtn){
        if (submitState) {
          submitBtn.removeAttribute('disabled');
        } else {
          submitBtn.setAttribute('disabled', 'disabled');
        }
      }
      }
  
      function handleCheckboxes() {
        var checkboxes = document.querySelectorAll('input[type="checkbox"]');
        var importantCheckboxes = [checkboxes[0], checkboxes[1]];
        var importantCheckedCount = 0;
  
        importantCheckboxes.forEach((ch) => {
          ch.addEventListener('click', (e) => {
            if (e.target.checked) {
              importantCheckedCount += 1;
            } else {
              importantCheckedCount -= 1;
            }
  
            if (importantCheckedCount > 0) {
              submitState = true;
            } else {
              submitState = false;
            }
            checkSubmitStatus();
          });
        });
      }
  
      function handleSubmitLogic() {
        var radioBtns = document.querySelectorAll('input[type="radio"]');
        if(radioBtns.length !== 0){
          checkSubmitStatus();
          radioBtns[0].addEventListener('click', () => {
            submitState = true;
            checkSubmitStatus();
          });
    
          radioBtns[1].addEventListener('click', () => {
            submitState = false;
            checkSubmitStatus();
            window.setTimeout(handleCheckboxes, 100);
          });
        }
  
      }
  
      function setUpSubmitButton() {
        if (document.querySelector('.mktoForm')) {
          submitBtn = document.querySelector('.mktoForm button[type="submit"]');
          handleSubmitLogic();
        } else {
          submitState = true;
        }
        initialSetup = true;
      }
    

	function checkSubmitStatus() {
		if (submitState) {
			submitBtn.removeAttribute('disabled');
		} else {
			submitBtn.setAttribute('disabled', 'disabled');
		}
	}

	function handleCheckboxes() {
		var checkboxes = document.querySelectorAll('input[type="checkbox"]');
		console.log(checkboxes);
		var importantCheckboxes = [checkboxes[0], checkboxes[1]];
		var importantCheckedCount = 0;

		importantCheckboxes.forEach((ch) => {
			ch.addEventListener('click', (e) => {
				if (e.target.checked) {
					importantCheckedCount += 1;
				} else {
					importantCheckedCount -= 1;
				}

				if (importantCheckedCount > 0) {
					submitState = true;
				} else {
					submitState = false;
				}
				checkSubmitStatus();
			});
		});
	}

	function handleSubmitLogic() {
		var radioBtns = document.querySelectorAll('input[type="radio"]');

		if (radioBtns.length !== 0) {
			checkSubmitStatus();
			radioBtns[0].addEventListener('click', () => {
				submitState = true;
				checkSubmitStatus();
			});

			radioBtns[1].addEventListener('click', () => {
				submitState = false;
				checkSubmitStatus();
				window.setTimeout(handleCheckboxes, 100);
			});
		}
	}

	function setUpSubmitButton() {
		if (document.querySelector('.mktoForm') && formId === '1801') {
			submitBtn = document.querySelector('.mktoForm button[type="submit"]');
			handleSubmitLogic();
		} else {
			submitState = true;
		}
		initialSetup = true;
	}

	function FormPopup() {
	    if (localStorage.getItem('formSubmitted') !== 'true' && localStorage.getItem('fibrFormSubmitted') !== 'true') {
	        document.body.classList.remove("ShowSection");

	        function addOrUpdateURLParam(key, value) {
	            const searchParams = new URLSearchParams(window.location.search)
	            searchParams.set(key, value)
	            const newRelativePathQuery = window.location.pathname + "?" + searchParams.toString()
	            history.pushState(null, "", newRelativePathQuery)
	        }
	        addOrUpdateURLParam("aliId", "");
			
	    } else {
	        document.body.classList.add("ShowSection");

	        function addOrUpdateURLParam(key, value) {
	            const searchParams = new URLSearchParams(window.location.search)
	            searchParams.set(key, value)
	            const newRelativePathQuery = window.location.pathname + "?" + searchParams.toString()
	            history.pushState(null, "", newRelativePathQuery)
	        }
	        addOrUpdateURLParam("aliId", "eyJpIjoiU3QxV1BmVFZ5aXFKcjh2WSIsInQiOiJXRUxtbDFycXdjTVdndERJcVd3VndRPT0ifQ%253D%253D");
	    }
	}

	const formHandler = () => {
	    window.MktoForms2.whenReady((form) => {
	        form.onValidate((initialValidateSuccessful) => {
	            if (initialValidateSuccessful) {
	                const regex = new RegExp(/[\/\|\}\{\]\[\*\+\?\^\%\$\#\@\!\~\_\\]/);
	                const firstNameField = document.querySelector('.mktoForm #FirstName');
	                const lastNameField = document.querySelector('.mktoForm #LastName');
	                const companyField = document.querySelector('.mktoForm #Company');
	                const errorMessage =
	                    'Special characters are not permitted, please update your entry.';

	                form.submittable(true);

	                if (firstNameField && regex.test(firstNameField.value)) {
	                    form.showErrorMessage(errorMessage, MktoForms2.$('#FirstName'));
	                    form.submittable(false);
	                } else if (lastNameField && regex.test(lastNameField.value)) {
	                    form.showErrorMessage(errorMessage, MktoForms2.$('#LastName'));
	                    form.submittable(false);
	                } else if (companyField && regex.test(companyField.value)) {
	                    form.showErrorMessage(errorMessage, MktoForms2.$('#Company'));
	                    form.submittable(false);
	                }
	            }
	        });
	        // add referrer to form from sessionStorage
	        form.setValues({
	            referrer: sessionStorage.getItem('siftReferrer'),
	            UTM_Source__c: sessionStorage.getItem('siftUtmSource'),
	            UTM_Medium__c: sessionStorage.getItem('siftUtmMedium'),
	            UTM_Campaign__c: sessionStorage.getItem('siftUtmCampaign'),
	        });

	        // Call the onSubmit handler if it's provided
	        if (onSubmit && typeof onSubmit === 'function') {
	            form.onSubmit(onSubmit);
	        } else {
	            form.onSubmit();
	        }
			let sectionLength = document.querySelector('.FormPopup');
			if (!sectionLength) {
				sectionLength = document.querySelector('.gated-form')
			}
				if (sectionLength){
				form.onSuccess(function() {
					return (
						setTimeout(function() {
							function addOrUpdateURLParam(key, value) {
								const searchParams = new URLSearchParams(window.location.search)
								searchParams.set(key, value)
								const newRelativePathQuery = window.location.pathname + "?" + searchParams.toString()
								history.pushState(null, "", newRelativePathQuery)
							}
							addOrUpdateURLParam("aliId", "eyJpIjoiU3QxV1BmVFZ5aXFKcjh2WSIsInQiOiJXRUxtbDFycXdjTVdndERJcVd3VndRPT0ifQ%253D%253D");
							localStorage.setItem('fibrFormSubmitted', 'true');
							localStorage.setItem('formSubmitted', 'true');
							document.body.classList.add("ShowSection");
						}, 1500),
						setTimeout(function() {
							location.replace(location.href);
						}, 1700),
						!1
					);
				});
			}
	    });

		let sectionLength = document.querySelector('.FormPopup');
		if (!sectionLength) {
			sectionLength = document.querySelector('.gated-form')
		}
		if (sectionLength){
			FormPopup();
		}

	};

	const loadScript = () => {
		var s = document.createElement('script');
		s.id = marketoScriptId;
		s.type = 'text/javascript';
		s.async = true;
		s.src = 'https://pages.sift.com/js/forms2/js/forms2.min.js';
		s.onreadystatechange = function () {
			if (this.readyState === 'complete' || this.readyState === 'loaded') {
				setIsLoaded(true);
			}
		};
		s.onload = () => setIsLoaded(true);
		document.getElementsByTagName('head')[0].appendChild(s);
	};

	return <form id={`mktoForm_${formId}`}></form>;
}
