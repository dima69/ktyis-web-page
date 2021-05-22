import Layout from '../../components/Layout';

export default function MajorsIndexPage() {
  return (
    <Layout metaTitle="Специальности">
      <h1 className="text-center">Список всех специальностей</h1>
      <div>
        <a href="majors/programmirovanie">Программирование</a>
      </div>
      <div>
        <a href="majors/ekonomika-i-byh-ychet">Экономика и бухгалтерский учет</a>
      </div>
      <div>
        <a href="majors/gostinichniy-servis">Гостиничный сервис</a>
      </div>
      <div>
        <a href="majors/finansy">Финансы</a>
      </div>
      <div>
        <a href="majors/turism">Туризм</a>
      </div>
      <div>
        <a href="majors/bankovskoe-delo">Банковское дело</a>
      </div>
      <div>
        <a href="majors/design">Дизайн</a>
      </div>
    </Layout>
  );
};
