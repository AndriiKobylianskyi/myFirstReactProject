import './app-filter.css'


const AppFilter = () => {
    return (
        <div className="btn-group">
            <button className="btn btn-light"
                type="button">
                Всі співробітники
            </button>
            <button className="btn btn-outline-light"
                type="button">
                Спіробітники яких підвищать
            </button>
            <button className="btn btn-outline-light"
                type="button">
                Заробітня плата більше 1000 доларів
            </button>
        </div>
    )
}

export default AppFilter