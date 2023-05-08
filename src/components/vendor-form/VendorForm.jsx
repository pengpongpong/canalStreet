import React, { useRef } from 'react'
import { useForm, useFormContext, FormProvider, useController } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import "./VendorForm.sass"

const InputEl = ({ registerName, placeholder, type, methodsFormState }) => {
    const { register } = useFormContext();
    return (
        <div className="form__inputContainer">
            <input className="form__input" type={type} placeholder={placeholder} {...register(`${registerName}`)} />
            {methodsFormState?.errors?.[`${registerName}`] && <p className="form__error">{methodsFormState?.errors?.[`${registerName}`].message}</p>}
        </div>
    );
};

function SelectEl({ control, name, options, requiredText, methodsFormState, disabled }) {
    const {
        field,
        fieldState: { invalid, isTouched, isDirty },
        formState: { touchedFields, dirtyFields }
    } = useController({
        name,
        control,
        rules: { required: `${requiredText}` },
    });

    return (
        <div className="form__inputContainer">
            <select {...field} className="form__select" disabled={disabled} >
                {options.map((obj, index) => (
                    <option className="form__option" key={obj.value} value={obj.value}>{obj.label}</option>
                ))}
            </select>
            {methodsFormState?.errors?.[`${name}`] && <p className="form__error">{methodsFormState?.errors?.[`${name}`].message}</p>}
        </div>

    )
}

const FormCard = ({ headline, items, imageSrc }) => {
    return (
        <div className="vendorForm__card">
            <picture className="vendorForm__imageContainer"><img className="vendorForm__image" src={imageSrc} alt={`${headline}-image`} /></picture>
            <div className="vendorForm__cardText">
                <h2 className="vendorForm__listHeadline">{headline.replace(/-/g, " ")}</h2>
                <ul className="vendorForm__list">
                    {items?.map((obj) => (
                        <li className="vendorForm__item" key={obj.value}><p>{obj.value}</p></li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

const formSchema = yup.object({
    businessName: yup.string().required("Please enter business name!"),
    foodOrRetail: yup.string().required("Please select a category!"),
    startMonth: yup.string().required("Please select a start month!"),
    termLength: yup.string().required("Please select a term length!"),
    phone: yup.string()
        .matches(
            /^[+]*[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/,
            "Please enter a valid phone number"
        ).required("Please enter phone number!"),
    email: yup.string().email("Please enter a valid email address!").required("Please enter email address!")
}).required();


function VendorForm() {
    const methods = useForm({
        defaultValues: {
            businessName: "",
            foodOrRetail: "",
            startMonth: "",
            termLength: "",
            phone: "",
            email: "",
            socialMedia: "",
            website: "",
            product: "",
            about: ""
        },
        resolver: yupResolver(formSchema)
    })
    const submitText = useRef()

    const onSubmit = data => {
        console.log("submitData", data)
        submitText.current.style.display = "block"
        methods.reset()
    };

    const listDescription = {
        "How-it-works": [
            { value: "Design your space" },
            { value: "Create your experience" },
            { value: "Grow your audience" },
        ],
        "Why-Street-Market?": [
            { value: "Low cost of entry" },
            { value: "Minimal Commitment" },
            { value: "Low rental cost" },
        ],
        "Benefits": [
            { value: "Build exposure through our built in foot traffic" },
            { value: "Get real time customer feedback" },
            { value: "Test new products" },
            { value: "Create physical brand experiences" },
            { value: "Build your loyal following" },
        ],
    }

    const foodRetailOptions = [
        { value: "", label: "Food or Retail?" },
        { value: "food", label: "Food" },
        { value: "retail", label: "Retail" },
    ]

    const startOptions = [
        { value: "", label: "Start Date" },
        { value: "january", label: "January" },
        { value: "february", label: "February" },
        { value: "march", label: "March" },
        { value: "may", label: "May" },
        { value: "june", label: "June" },
        { value: "july", label: "July" },
        { value: "august", label: "August" },
        { value: "september", label: "September" },
        { value: "october", label: "October" },
        { value: "november", label: "November" },
        { value: "december", label: "December" },
    ]

    const termOptions = [
        { value: "", label: "Term Length" },
        { value: "1year", label: "1 Year" },
        { value: "1+year", label: "1+ Year" },
    ]

    return (
        <section className="vendorForm">
            <div className="vendorForm__headlineContainer">
                <h1 className="vendorForm__headline">Become a Vendor at Street Market</h1>
            </div>
            <div className="vendorForm__cardsContainer">
                <FormCard
                    headline={Object.keys(listDescription)[0]}
                    items={listDescription["How-it-works"]}
                    imageSrc={"/images/vendor-form/vendorForm1.jpg"}
                />
                <FormCard
                    headline={Object.keys(listDescription)[1]}
                    items={listDescription["Why-Street-Market?"]}
                    imageSrc={"/images/vendor-form/vendorForm2.jpg"}
                />
                <FormCard
                    headline={Object.keys(listDescription)[2]}
                    items={listDescription["Benefits"]}
                    imageSrc={"/images/vendor-form/vendorForm3.jpg"}
                />
            </div>
            <h2 className="vendorForm__headline">Become a Vendor</h2>
            <FormProvider {...methods} >
                <form className="form" autoComplete="on">
                    <div className="form__row">
                        <InputEl
                            placeholder="Business Name"
                            registerName="businessName"
                            type="text"
                            methodsFormState={methods.formState}
                        />
                        <SelectEl
                            name="foodOrRetail"
                            options={foodRetailOptions}
                            control={methods.control}
                            methodsFormState={methods.formState}
                        />
                    </div>
                    <div className="form__row">
                        <SelectEl
                            name="startMonth"
                            options={startOptions}
                            control={methods.control}
                            methodsFormState={methods.formState}
                        />
                        <SelectEl
                            name="termLength"
                            options={termOptions}
                            control={methods.control}
                            methodsFormState={methods.formState}
                            disabled={methods.formState.dirtyFields.businessName && methods.formState.dirtyFields.foodOrRetail && methods.formState.dirtyFields.startMonth ? false : true}
                        />
                    </div>
                    <div className="form__row">
                        <InputEl
                            placeholder="Phone"
                            registerName="phone"
                            type="tel"
                            methodsFormState={methods.formState}
                        />

                        <InputEl
                            placeholder="Email"
                            registerName="email"
                            type="email"
                            methodsFormState={methods.formState}
                        />
                    </div>
                    <div className="form__row">
                        <InputEl
                            placeholder="Social media"
                            registerName="socialMedia"
                            type="url"
                            methodsFormState={methods.formState}
                            requiredText={false}
                        />
                        <InputEl
                            placeholder="Website"
                            registerName="website"
                            type="url"
                            methodsFormState={methods.formState}
                            requiredText={false}
                        />
                    </div>
                    <div className="form__row">
                        <InputEl
                            placeholder="Link a sales or brand deck"
                            registerName="product"
                            type="url"
                            methodsFormState={methods.formState}
                            requiredText={false}
                        />
                    </div>
                    <textarea {...methods.register("about", { required: false })} className="form__textarea" placeholder="Tell us a little about you..." cols="30" rows="10"></textarea>
                    <p className="form__submitText" ref={submitText}>Successfully submitted</p>
                    <input className="form__submitButton" onClick={methods.handleSubmit(onSubmit)} defaultValue="Submit" />
                </form>
            </FormProvider>
        </section>

    )
}

export default VendorForm