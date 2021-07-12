import { Link } from 'react-router-dom';
import '../styles/About.css';

export default function About() {
    return (
        <div className="about-us">
            <h2>Sobre nosotros</h2>
            <p>El concepto <q>buddy</q> viene de la figura existente en las universidades que ofrecen experiencias <q>Erasmus</q> para estudiantes de otros países. Estos <q>buddies</q> son estudiantes de cursos superiores que te ayudan en tus primeros días en la ciudad, a adaptarte a ella ayudándote en los trámites o gestiones, dándote recomendaciones o cualquier consejo que necesites.</p>
            <p><strong>b-buddy</strong> nace con la idea de hacer más fácil el cambio de residencia para las personas que por las razones que sean, tienen que cambiar su lugar de residencia y mudarse a otro país. Quizá ya no eres un estudiante pero mudarse da un poquito de miedo y saber qué puedes contar con ayuda seguro que lo hace mucho más fácil. </p>
            <p>¿Quién mejor qué alguien que vive en tu lugar de destino para ayudarte a dar esos primeros pasos en tu nueva ciudad?</p>
            <div className="container-abouts">
                <div className="abouts">
                    <h3>¿Necesitas un buddy?</h3>
                    <p>¿Te mudas con trabajo? Contacta con buddies de tu sector y ellos te ayudarán en lo que necesites. ¿Tienes problemas con el idioma local? Uno de nuestros buddies te puede ayudar a hacer tus primeras gestiones. ¿Necesitas una inmersión cultural express? Pide ayuda y sumérgete en la política, cultura o tradiciones de tu nuevo hogar.</p>
                    <p>Regístrate y cuéntanos más sobre tí. Tienes a tu disposición a nuestros buddies qué podrán ayudarte según tus necesidades, contacta con el que quieras y ya estarás un pasito más cerca de tu destino.</p>
                    <Link to="/user-register">Encuentra tu buddy</Link>
                </div>
                <div className="abouts">
                    <h3>Be a buddy</h3>
                    <p>¿Quién no se ha sentido perdido cuando ha tenido que mudarse a un lugar que no conoce? Tú tienes la oportunidad de facilitarle ese cambio a muchas personas. ¿Tienes experiencia en un sector determinado del lugar dónde vives? Ayuda a ese compañero que llega nuevo. ¿Te sobran algunas horas al día? Guíales en sus primeros pasos en tu ciudad y aprovecha para conocer gente nueva.</p>
                    <p>Regístrate y cuéntanos más sobre tí. Tú decides si puedes ayudar a alguien!!</p>
                    <Link to="/buddy-register">Sé un buddy</Link>
                </div>
            </div>
        </div>
    )
}
