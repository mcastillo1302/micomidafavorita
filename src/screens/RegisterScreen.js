import React, {useState} from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import {Input, Button, Text} from 'react-native-elements';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../config/firebase';

export default function RegisterScreen({navigation}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
        return passwordRegex.test(password);
    };

    const validateForm = () => {
        let errors = {};
        if (!email) errors.email = 'El email es requerido';
        else if (!/\S+@\S+\.\S+/.test(email)) errors.email = 'Email inválido';
        if (!password) errors.password = 'La contraseña es requerida';
        else if (!validatePassword(password)) {
            errors.password = 'La contraseña debe tener mínimo 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial';
        }
        if (password !== confirmPassword) {
            errors.confirmPassword = 'Las contraseñas no coinciden';
        }
        return errors;
    };

    const handleRegister = async () => {
        setIsLoading(true);
        try {
            let errors = validateForm();
            if (errors.email) {
                setError('Error al registrarse: ' + errors.email);
            } else if (errors.password) {
                setError('Error al registrarse: ' + errors.password);
            } else if (errors.confirmPassword) {
                setError('Error al registrarse: ' + errors.confirmPassword);
            } else {
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                navigation.replace('Home');
            }
        } catch (error) {
            setError('Error al registrarse: ' + error.message);
        } finally {
            setIsLoading(false);
        }
    };
    return (
        <View style={styles.container}>
            {isLoading ? (
                <ActivityIndicator size="large" color="#0000ff"/>
            ) : (
                <>
                    <Text h3 style={styles.title}>Registro</Text>
                    <Input
                        placeholder="Email"
                        value={email}
                        onChangeText={setEmail}
                        autoCapitalize="none"
                    />
                    <Input
                        placeholder="Contraseña"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                    />
                    <Input
                        placeholder="Confirmar Contraseña"
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                        secureTextEntry
                    />
                    {error ? <Text style={styles.error}>{error}</Text> : null}
                    <Button
                        title="Registrarse"
                        onPress={handleRegister}
                        containerStyle={styles.button}
                    />
                    <Button
                        title="Volver al Login"
                        type="outline"
                        onPress={() => navigation.navigate('Login')}
                        containerStyle={styles.button}
                    />
                </>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
    },
    title: {
        textAlign: 'center',
        marginBottom: 30,
    },
    button: {
        marginVertical: 10,
    },
    error: {
        color: 'red',
        textAlign: 'center',
        marginBottom: 10,
    },
});