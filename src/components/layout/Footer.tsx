import * as React from "react";
import Image from "next/image";
import { Landmark, Mail, Phone, MapPin } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-brand-outline/35 bg-brand-ebony text-brand-outline-variant py-12 gold-dust-texture">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Info */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center gap-2">
              <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-white overflow-hidden shadow-md">
                <Image src="/logo.png" alt="HCM Logo" fill className="object-contain p-0.5" sizes="32px" />
              </div>
              <span className="text-md font-bold font-serif tracking-tight text-brand-paper">
                HCM: Ký Ức Đời Người
              </span>
            </div>
            <p className="text-sm leading-relaxed text-brand-outline-variant/70 font-light">
              Trang thông tin tương tác nhằm bảo tồn, giới thiệu sinh động cuộc đời, sự nghiệp cách mạng vĩ đại và các tác phẩm bất hủ của Chủ tịch Hồ Chí Minh.
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col space-y-3">
            <h4 className="text-xs font-bold text-brand-gold uppercase tracking-widest">Thông tin liên hệ</h4>
            <ul className="space-y-2.5 text-sm text-brand-outline-variant/70 font-light">
              <li className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 text-brand-gold shrink-0" />
                <span>Thành phố Hồ Chí Minh, Việt Nam</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-brand-gold shrink-0" />
                <span>lienhe@hcmkyucdoinguoi.vn</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-brand-gold shrink-0" />
                <span>+84 (028) 3829 0000</span>
              </li>
            </ul>
          </div>

          {/* Quick Links / Mission */}
          <div className="flex flex-col space-y-3">
            <h4 className="text-xs font-bold text-brand-gold uppercase tracking-widest">Sứ mệnh của chúng tôi</h4>
            <p className="text-sm leading-relaxed text-brand-outline-variant/70 font-light">
              Chúng tôi tin rằng di sản tinh thần của Bác không nằm trên những trang tài liệu đóng bụi, mà luôn sống động, truyền cảm hứng mạnh mẽ cho thế hệ hôm nay và mai sau.
            </p>
          </div>
        </div>

        <div className="border-t border-brand-outline/20 mt-8 pt-8 text-center text-xs text-brand-outline-variant/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} HCM: Ký Ức Đời Người. Phát triển cho cộng đồng nghiên cứu lịch sử.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-brand-gold transition-colors">Điều khoản</a>
            <a href="#" className="hover:text-brand-gold transition-colors">Chính sách bảo mật</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
