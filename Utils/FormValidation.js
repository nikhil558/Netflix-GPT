

const FormValidation = (name, email, password) => {

    if (name !== null) {
        const nameValid = /([a-zA-Z0-9_\s]+)/.test(name);
        if (!nameValid) return "Name is not Valid";
      }
    const emailValid = /^[^@]+@[^@]+\.[^@]+$/.test(email)
    const passwordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)


    if (!emailValid) return "Email is not Valid"

    if (!passwordValid) return "Password is not Valid"

    return null
}

export default FormValidation