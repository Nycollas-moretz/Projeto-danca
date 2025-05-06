import styles from '@/Styles/LoginForm.module.css'
import React, { useState } from "react";

const LoginForm: React.FC = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const validateEmail = (email: string) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) {
            setEmailError("O email é obrigatório");
            return false;
        } else if (!re.test(email)) {
            setEmailError("Por favor, insira um email válido");
            return false;
        }
        setEmailError("");
        return true;
    };

    const validatePassword = (password: string) => {
        if (!password) {
            setPasswordError("A senha é obrigatória");
            return false;
        } else if (password.length < 6) {
            setPasswordError("A senha deve ter pelo menos 6 caracteres");
            return false;
        }
        setPasswordError("");
        return true;
    };

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        const isEmailValid = validateEmail(email);
        const isPasswordValid = validatePassword(password);
        if (isEmailValid && isPasswordValid) {
            setIsLoading(true);
            setTimeout(() => {
                setIsLoading(false);
                alert("Login realizado com sucesso!");
            }, 1500);
        }
    };

    const getPasswordStrength = () => {
        if (!password) return "";
        if (password.length < 6) return "Fraca";
        if (password.length < 10) return "Média";
        return "Forte";
    };

    const getPasswordStrengthColor = () => {
        if (!password) return "";
        if (password.length < 6) return styles.passwordStrengthBarWeak;
        if (password.length < 10) return styles.passwordStrengthBarMedium;
        return styles.passwordStrengthBarStrong;
    };

    return (
        <div className={styles.formContainer}>
            <div className={styles.formWrapper}>
                <h2 className={styles.title}>Entrar na sua conta</h2>
                <form onSubmit={handleLogin}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="email" className={styles.label}>Email</label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                if (email) validateEmail(e.target.value);
                            }}
                            className={`${styles.input} ${emailError ? styles.inputError : ''}`}
                            placeholder="seu@email.com"
                        />
                        {emailError && <p className={styles.errorText}>{emailError}</p>}
                    </div>

                    <div className={styles.inputGroup}>
                        <label htmlFor="password" className={styles.label}>Senha</label>
                        <div className={styles.inputWrapper}>
                            <input
                                id="password"
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                    if (password) validatePassword(e.target.value);
                                }}
                                className={`${styles.input} ${passwordError ? styles.inputError : ''}`}
                                placeholder="••••••••"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className={styles.forgotPasswordLink}
                            >
                                {showPassword ? "Esconder" : "Mostrar"}
                            </button>
                        </div>
                        {passwordError && <p className={styles.errorText}>{passwordError}</p>}
                        {password && (
                            <div className={styles.passwordStrengthContainer}>
                                <span>Força da senha: {getPasswordStrength()}</span>
                                <div className={`${styles.passwordStrengthBar} ${getPasswordStrengthColor()}`} />
                            </div>
                        )}
                    </div>

                    <div className={styles.checkboxGroup}>
                        <div>
                            <input
                                id="remember-me"
                                type="checkbox"
                                checked={rememberMe}
                                onChange={() => setRememberMe(!rememberMe)}
                            />
                            <label htmlFor="remember-me" className={styles.checkboxLabel}> Lembrar-me</label>
                        </div>
                        <a href="#" className={styles.forgotPasswordLink}>Esqueceu a senha?</a>
                    </div>

                    <button type="submit" disabled={isLoading} className={styles.submitButton}>
                        {isLoading ? "Entrando..." : "Entrar"}
                    </button>
                </form>

                <div className={styles.createAccount}>
                    <p>Não tem uma conta? <a href="#" className={styles.createAccountLink}>Criar conta</a></p>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
