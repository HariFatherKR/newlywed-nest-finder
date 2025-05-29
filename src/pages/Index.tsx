
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Home, Search, FileText, CheckCircle, Users, Clock, Shield } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    area: "",
    budget: "",
    homeType: "",
    moveDate: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "신청이 완료되었습니다!",
      description: "48시간 내에 맞춤 매물 리포트를 보내드리겠습니다.",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-rose-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Heart className="w-8 h-8 text-rose-500" />
              <h1 className="text-2xl font-bold text-gray-800">신혼집 매물 컨시어지</h1>
            </div>
            <Badge variant="secondary" className="bg-rose-100 text-rose-700">
              Beta 서비스
            </Badge>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            신혼집 찾기,<br />
            <span className="text-rose-500">더 이상 스트레스받지 마세요</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            검증된 전세/월세 매물을 48시간 내에 맞춤 추천해드립니다.<br />
            전세사기 걱정 없이, 믿을 수 있는 신혼집을 찾아보세요.
          </p>
          <div className="flex justify-center space-x-4 mb-8">
            <div className="flex items-center space-x-2 text-gray-600">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>매물 검증</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>48시간 내 추천</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>맞춤형 큐레이션</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            이런 고민, 혹시 있으신가요?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="pt-6">
                <Search className="w-12 h-12 text-rose-500 mx-auto mb-4" />
                <h4 className="font-semibold mb-2">매물 정보가 흩어져 있어요</h4>
                <p className="text-sm text-gray-600">직방, 호갱노노, 카페... 어디서부터 봐야 할지 모르겠어요</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <Clock className="w-12 h-12 text-rose-500 mx-auto mb-4" />
                <h4 className="font-semibold mb-2">시간이 없어요</h4>
                <p className="text-sm text-gray-600">맞벌이라 발품 팔 시간이 부족해요</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <Shield className="w-12 h-12 text-rose-500 mx-auto mb-4" />
                <h4 className="font-semibold mb-2">전세사기가 무서워요</h4>
                <p className="text-sm text-gray-600">검증되지 않은 매물이 많아서 불안해요</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <Users className="w-12 h-12 text-rose-500 mx-auto mb-4" />
                <h4 className="font-semibold mb-2">기준을 정하기 어려워요</h4>
                <p className="text-sm text-gray-600">어떤 조건이 중요한지 판단하기 힘들어요</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-rose-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            이렇게 도와드려요
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-rose-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h4 className="text-xl font-semibold mb-2">간단한 조건 입력</h4>
              <p className="text-gray-600">위치, 예산, 집 타입 등 원하는 조건을 간단히 입력해주세요</p>
            </div>
            <div className="text-center">
              <div className="bg-rose-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h4 className="text-xl font-semibold mb-2">전문가 매물 리서치</h4>
              <p className="text-gray-600">모든 플랫폼을 검토하여 조건에 맞는 검증된 매물을 찾아드려요</p>
            </div>
            <div className="text-center">
              <div className="bg-rose-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h4 className="text-xl font-semibold mb-2">맞춤 리포트 제공</h4>
              <p className="text-gray-600">48시간 내에 엄선된 3건의 매물을 카카오톡으로 전송해드려요</p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-white" id="apply">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">
              무료 매물 추천 신청하기
            </h3>
            <Card>
              <CardHeader>
                <CardTitle className="text-center text-rose-600">
                  <FileText className="w-6 h-6 inline mr-2" />
                  신혼집 조건 입력
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">성함 *</Label>
                      <Input 
                        id="name" 
                        placeholder="홍길동"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">연락처 *</Label>
                      <Input 
                        id="phone" 
                        placeholder="010-1234-5678"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">이메일</Label>
                    <Input 
                      id="email" 
                      type="email"
                      placeholder="example@email.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                    />
                  </div>

                  <div>
                    <Label htmlFor="area">선호 지역 *</Label>
                    <Select onValueChange={(value) => handleInputChange("area", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="지역을 선택해주세요" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="gangnam">강남구</SelectItem>
                        <SelectItem value="seocho">서초구</SelectItem>
                        <SelectItem value="songpa">송파구</SelectItem>
                        <SelectItem value="gangdong">강동구</SelectItem>
                        <SelectItem value="mapo">마포구</SelectItem>
                        <SelectItem value="yongsan">용산구</SelectItem>
                        <SelectItem value="junggu">중구</SelectItem>
                        <SelectItem value="other">기타 (상담시 협의)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="budget">예산 범위 *</Label>
                    <Select onValueChange={(value) => handleInputChange("budget", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="예산을 선택해주세요" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="3-4">전세 3-4억</SelectItem>
                        <SelectItem value="4-5">전세 4-5억</SelectItem>
                        <SelectItem value="5+">전세 5억 이상</SelectItem>
                        <SelectItem value="monthly-50">월세 50만원 이하</SelectItem>
                        <SelectItem value="monthly-100">월세 50-100만원</SelectItem>
                        <SelectItem value="monthly-100+">월세 100만원 이상</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="homeType">선호 주거 형태 *</Label>
                    <Select onValueChange={(value) => handleInputChange("homeType", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="주거 형태를 선택해주세요" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="apt">아파트</SelectItem>
                        <SelectItem value="officetel">오피스텔</SelectItem>
                        <SelectItem value="villa">빌라</SelectItem>
                        <SelectItem value="any">상관없음</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="moveDate">이사 예정일</Label>
                    <Input 
                      id="moveDate" 
                      type="date"
                      value={formData.moveDate}
                      onChange={(e) => handleInputChange("moveDate", e.target.value)}
                    />
                  </div>

                  <Button type="submit" className="w-full bg-rose-500 hover:bg-rose-600 text-white">
                    <Heart className="w-4 h-4 mr-2" />
                    무료 매물 추천 받기
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-rose-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            서비스 요금
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-2 border-gray-200">
              <CardHeader>
                <CardTitle className="text-center">기본 추천</CardTitle>
                <div className="text-center">
                  <span className="text-3xl font-bold">무료</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    엄선된 3건 매물 추천
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    기본 매물 정보 제공
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    48시간 내 발송
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-rose-500 relative">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-rose-500">
                추천
              </Badge>
              <CardHeader>
                <CardTitle className="text-center">프리미엄 추천</CardTitle>
                <div className="text-center">
                  <span className="text-3xl font-bold text-rose-500">29,000원</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    엄선된 5건 매물 추천
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    상세 매물 분석 리포트
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    현장 사진 및 주변 환경 정보
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    전화 상담 포함
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    24시간 내 발송
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-rose-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">
            더 이상 매물 찾기로 스트레스받지 마세요
          </h3>
          <p className="text-xl mb-8 opacity-90">
            검증된 신혼집을 48시간 내에 받아보세요
          </p>
          <Button 
            size="lg" 
            className="bg-white text-rose-500 hover:bg-gray-100"
            onClick={() => document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })}
          >
            지금 바로 신청하기
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Heart className="w-6 h-6 text-rose-500" />
            <span className="text-xl font-bold">신혼집 매물 컨시어지</span>
          </div>
          <p className="text-gray-400">
            신혼부부의 행복한 시작을 응원합니다
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
