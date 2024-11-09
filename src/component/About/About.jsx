import { useState } from "react";


const About = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  return (
    <div>
      <div className="relative w-[390px] lg:w-full">
        <div className="flex flex-col lg:flex-row justify-center lg:gap-24 lg:p-14 gap-10 p-5">
          <section>
            <div className="w-full mx-auto ">
              {/* Tab Navigation */}
              <div className="flex border-b border-[#B52B1D]">
                <button
                  onClick={() => setActiveTab("tab1")}
                  className={`flex-1 py-2 text-center font-semibold ${
                    activeTab === "tab1"
                      ? "bg-[#B52B1D] text-white mr-2"
                      : "text-gray-500"
                  }`}
                >
                  About
                </button>
                <button
                  onClick={() => setActiveTab("tab2")}
                  className={`flex-1 py-2 text-center font-semibold ${
                    activeTab === "tab2"
                      ? "bg-[#B52B1D] text-white mr-2"
                      : "text-gray-500"
                  }`}
                >
                  Experience
                </button>
                <button
                  onClick={() => setActiveTab("tab3")}
                  className={`flex-1 py-2 text-center font-semibold ${
                    activeTab === "tab3"
                      ? "bg-[#B52B1D] text-white ml-2"
                      : "text-gray-500"
                  }`}
                >
                  Contact
                </button>
              </div>

              {/* Tab Content */}
              <div className="mt-4">
                {activeTab === "tab1" && (
                  <div>
                    <h2 className="text-[40px] lg:text-4xl font-bold leading-none">
                      Exceptional culinary <br /> experience and delicious food
                    </h2>
                    <p className="mt-2 text-gray-600 text-justify">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque ut laudantium adipisci culpa, consequuntur sit aliquam? Repellat, maxime nobis, perspiciatis porro molestias ullam, aperiam voluptates dolores nemo quia animi vel!
                      Modi vitae fugit natus provident voluptatum alias ex dolore officiis atque placeat quidem earum incidunt consectetur deserunt sit, autem mollitia. Dignissimos porro exercitationem nam. Eaque temporibus exercitationem rem animi culpa.
                      Cum perspiciatis, temporibus ex voluptatibus similique dolor tempore deleniti velit id dicta quidem. Excepturi quo quisquam ut dignissimos, expedita in beatae at doloribus repudiandae fugit reprehenderit, ad blanditiis iste aperiam?
                      Nobis obcaecati architecto et dignissimos ab suscipit doloribus id qui tenetur magnam impedit ipsum distinctio, totam possimus, ratione molestiae, est necessitatibus! Doloremque ipsa molestias aliquam? Voluptates quod consectetur necessitatibus molestias.
                      Excepturi exercitationem enim totam officia velit aspernatur a! Neque fugiat perspiciatis repellendus maiores temporibus illo ipsa? Animi atque quis rem. Ratione excepturi dolorem optio ipsa nisi nam magnam vel autem!
                      Deleniti repellendus facere, ad recusandae iure illum blanditiis fugiat nulla nobis, suscipit corrupti labore, velit nihil repellat? Incidunt atque quod aperiam qui illum culpa! Molestias quos distinctio deleniti error quam.
                      Doloremque, molestias impedit quasi asperiores libero aliquid eaque optio voluptate odit incidunt expedita, dolorem at perspiciatis adipisci atque. Delectus necessitatibus modi cupiditate debitis nobis reprehenderit doloribus consectetur et amet pariatur!
                      Odio possimus tempora esse ipsa blanditiis incidunt ducimus deleniti repudiandae dolores velit excepturi, dolor voluptate distinctio ad aliquam accusantium atque, modi dolorum debitis aperiam ipsam! Voluptatum repellat in aperiam veritatis!
                      Dolores expedita tempora laborum deleniti consectetur temporibus sed corporis eum nostrum, reiciendis praesentium odit sint molestiae. Odio accusantium ad velit excepturi amet iste, quae recusandae aliquam dolorem facilis enim atque!
                      Optio, voluptatem ducimus itaque harum quod et culpa, possimus assumenda necessitatibus sint eius ipsam aspernatur quisquam reiciendis a eos nobis iste praesentium tempore? Cupiditate corporis beatae maiores in distinctio excepturi.
                      Sunt sit soluta, excepturi cupiditate, magni inventore libero ullam odit voluptas, suscipit facilis harum dignissimos nemo quidem! Tempora fugit ea necessitatibus error illum quasi deleniti numquam nisi exercitationem. Laboriosam, nihil.
                      Eum porro ut illum voluptate facere cum corporis, odit similique molestiae maxime a, ullam nisi suscipit aliquid! Sunt quibusdam nisi alias magnam maxime rem eligendi doloremque! Nam quod sint maxime.
                      Quidem, asperiores eaque repudiandae aut qui fugiat unde odit debitis explicabo, molestias autem enim quisquam mollitia voluptas, tempora eius quas quos corrupti optio impedit labore laborum! Numquam laudantium fuga nam!
                      Id ipsa, numquam temporibus necessitatibus quis voluptatem alias, quos culpa magni beatae similique impedit! Harum facilis, reprehenderit delectus, cum consequatur reiciendis itaque voluptatibus dolor ea cumque nostrum iusto, repellendus nemo.
                      Sequi ducimus eum similique, blanditiis quia, ipsum quidem nobis necessitatibus, nemo commodi voluptate quasi tenetur eaque atque accusantium fugiat! At, amet mollitia accusantium et totam incidunt error tempora assumenda dolores!
                      Nisi veniam facilis animi. Maxime eligendi rem reprehenderit sunt perferendis, veritatis esse debitis amet dolorum ratione totam aperiam reiciendis possimus ducimus nisi iste voluptatum tempora laborum commodi quasi officiis. Sequi?
                      Incidunt ipsam ipsum asperiores ipsa facilis illum molestiae quisquam porro laboriosam iste repellendus delectus cumque error, dicta voluptatibus. Eos ab quam dolor at accusamus. Voluptates eius quam voluptatem sit labore!
                      Accusantium quam, consequatur dicta voluptate impedit tenetur beatae maxime veniam maiores asperiores quidem voluptatum qui odit autem doloribus molestias animi harum laudantium sunt, molestiae praesentium unde odio. Molestiae, recusandae non?
                      Nisi fuga tempore alias modi debitis voluptatem, minima facere. Laborum omnis quam autem fuga exercitationem reiciendis eligendi odit ducimus saepe. Debitis omnis libero ratione porro distinctio. Perferendis esse voluptas optio?
                      Quos expedita officiis nisi ut? Cum voluptatem modi culpa distinctio, nulla sapiente ratione impedit quis harum architecto, mollitia eos ex repellat voluptatibus? Totam, quo nihil similique numquam fuga ad ipsam!
                    </p>
                  </div>
                )}
                {activeTab === "tab2" && (
                  <div>
                    <h2 className="text-[40px] lg:text-4xl font-bold leading-none">
                      Exceptional culinary <br /> experience and delicious food
                    </h2>
                    <p className="mt-2 text-gray-600 text-justify">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa cupiditate, rem consequuntur dolores dicta numquam a beatae eveniet consectetur repellendus et facilis reiciendis harum! Quos iure esse veniam exercitationem dignissimos.
                      Facere deserunt inventore labore nobis magni quo voluptate nemo beatae quidem illo aperiam rem nihil quae laborum unde saepe nulla ipsa provident cupiditate reprehenderit accusantium eaque placeat, totam iusto. Enim.
                      Officia eveniet laudantium ullam tempore autem libero enim aperiam quisquam quod doloribus inventore sequi recusandae, incidunt molestiae magni natus consectetur asperiores eum maiores delectus quas tenetur cupiditate! Nihil, aspernatur est?
                      Iste aspernatur sequi obcaecati, suscipit, iure quibusdam consequuntur molestias repellat officiis delectus optio alias dolor rerum totam atque inventore sapiente explicabo deleniti? Eos odio doloribus quibusdam molestias delectus rerum non!
                      Sequi at fuga debitis possimus soluta repellat, quisquam porro autem, ipsa corporis ducimus quod omnis illo accusamus quaerat reiciendis ratione laboriosam sunt libero voluptates maxime dicta blanditiis amet ut. Dignissimos.
                      Nemo magnam, ratione, non minus quod aut corrupti est ex sed nisi cupiditate dignissimos dolorem. Dicta, voluptatum, amet repellat dolores quo id sunt odio dignissimos magnam odit sint excepturi totam.
                      Optio, ipsa temporibus! Perspiciatis sed distinctio obcaecati voluptate qui necessitatibus provident expedita architecto dignissimos illo commodi sunt doloremque quis dolorum veritatis a, porro repudiandae eligendi quo aliquam, quisquam, excepturi delectus.
                      Expedita dicta unde, iste molestiae laudantium veniam quis pariatur dolore soluta eum necessitatibus in, explicabo qui est, atque quod excepturi culpa earum! Asperiores in nobis soluta libero, neque possimus. Officiis?
                      Harum corporis sit sed magnam dicta. Quae nisi natus, numquam aliquid rem ipsa nostrum quaerat harum ullam ad ducimus dolorum veritatis eum in, perferendis amet fugit sunt temporibus! Accusantium, beatae?
                      Earum, maxime omnis quo fuga fugit tempora dolore! Praesentium, magni autem esse minus consequatur asperiores natus aperiam nesciunt est totam incidunt, provident dolores cupiditate sit voluptate quasi animi quos. Dolorum!
                      Cum delectus eligendi, sit nam autem esse dignissimos aperiam ipsam asperiores mollitia pariatur necessitatibus perspiciatis, veritatis facilis. Nam porro, ab corporis numquam, dolorem eos animi sit corrupti quibusdam iure pariatur.
                      Voluptatem et aut suscipit a corporis earum doloremque, debitis in molestias tempora pariatur sunt possimus accusamus asperiores. Perferendis quibusdam placeat veniam ipsa autem deserunt dolore quos harum cum rem. Facere.
                      Vero animi aut laboriosam perferendis magni eius ducimus error, hic sed mollitia nulla. Assumenda, cum earum eius ducimus velit deserunt nisi rem modi adipisci dolorum, perspiciatis distinctio culpa, rerum ipsum.
                      Libero tempore nobis magni quos, ratione sint in reiciendis facere quam nemo quo nam placeat, repudiandae numquam porro ea tenetur, ex id! Recusandae, sapiente quisquam ipsum nihil voluptatem maxime. Officia!
                      Error praesentium iure vitae officiis facilis unde id, est nihil. Quisquam doloribus libero nesciunt, ab sapiente ut ad molestias dignissimos soluta illum distinctio blanditiis amet eligendi enim exercitationem officia? Aperiam.
                      Alias eos dolor, earum quidem labore repellat iure quis suscipit expedita aut, minima praesentium animi aliquam quod officiis eaque! Molestias ratione totam at eius distinctio ex! Error itaque dolore possimus.
                      Blanditiis earum dolorum corrupti autem repudiandae error aspernatur consectetur delectus illum optio neque libero quo deleniti inventore, odit sunt? Veniam, fugit! Aut ullam suscipit perspiciatis necessitatibus accusamus quasi quae recusandae!
                      Distinctio dolorum nostrum deserunt dolores odio sint accusantium dignissimos mollitia nihil excepturi eum cupiditate facilis nobis quae aperiam recusandae, ex consequuntur aliquam! Quia amet nam ea quibusdam quidem nobis deserunt!
                      Quaerat blanditiis eius alias voluptates consequatur, doloremque maiores. A, ea nemo eos mollitia exercitationem nisi dicta minus eveniet corporis soluta aliquam, repellat deleniti, dolore cum adipisci temporibus optio laudantium consectetur?
                      Dignissimos aut omnis esse minus adipisci nam nihil repellat laborum repellendus corrupti facere quia laboriosam modi voluptatem magnam totam explicabo veniam atque asperiores, consectetur aliquid qui error ipsa dolore! Hic!
                    </p>
                  </div>
                )}
                {activeTab === "tab3" && (
                  <div>
                    <h2 className="text-[40px] lg:text-4xl font-bold leading-none">
                      Exceptional culinary <br /> experience and delicious food
                    </h2>
                    <p className="mt-2 text-gray-600 text-justify">
                      TLorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ornare non sed est cursus. Vel hac convallis ipsum,
                      facilisi odio pellentesque bibendum viverra tempus. Lorem
                      ipsum dolor sit amet consectetur adipiscing elit do
                      eiusmod tempor incididunt ut labore et dolore magna minim
                      veniam nostrud exercitation.
                    </p>
                  </div>
                )}
              </div>
            </div>
            <div>
            </div>
          </section>
        </div>
        <div>
         
        </div>
        
      </div>
    </div>
  );
};

export default About;
