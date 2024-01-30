import Directory from "../../components/directory/directory-component";
import Footer from "../../components/Footer/footer-component";

const Home = () => {
    return (
        <div>
            <Directory></Directory>
            
            <section>
                <Footer></Footer>
            </section>

        </div>
    );
};

export default Home;

// import { useContext } from "react";

// import { CategoriesContext } from "../../contexts/categories-context";
// import { CategoryMap } from "../../utilities/firebase-utilities";

// const Home = () => {
//     const {categoriesMap} = useContext(CategoriesContext);

//     Object.keys(categoriesMap as CategoryMap).map((categoryTitle) => {
//         const products = categoriesMap[categoryTitle];
//         const title = categoryTitle;
//     });
// };

// export default Home;